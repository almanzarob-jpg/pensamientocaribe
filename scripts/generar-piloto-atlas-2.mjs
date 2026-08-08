#!/usr/bin/env node

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const args = process.argv.slice(2);
const sourcePath = path.resolve(root, args[0] || "data/agua-de-por-medio/datos-atlas.json");
const configPath = path.resolve(root, args[1] || "data/agua-de-por-medio/atlas-2/piloto-config.json");
const catalogPath = path.resolve(root, args[2] || "data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json");
const outputPath = path.resolve(root, args[3] || "data/agua-de-por-medio/atlas-2/piloto-generado.json");

const readJson = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
const sourceText = fs.readFileSync(sourcePath, "utf8");
const atlas = JSON.parse(sourceText);
const config = readJson(configPath);
const catalogs = readJson(catalogPath);
const works = new Map(atlas.obras.map((work) => [work.id, work]));
const approval = config.aprobacion;

if (approval?.estado !== "aprobado" || !approval.fecha || !approval.responsable) {
  throw new Error("El piloto corregido exige aprobación, fecha y responsable explícitos.");
}

const languageMap = [
  [/angl[oó]fono/i, "inglés"],
  [/hispan[oó]?fono|^hispano\b/i, "español"],
  [/franc[oó]fono/i, "francés"],
  [/neerland[eé]s/i, "neerlandés"],
  [/lus[oó]fono/i, "portugués"],
  [/dan[eé]s/i, "danés"],
];

function deriveLanguages(raw) {
  const values = languageMap.filter(([pattern]) => pattern.test(raw || "")).map(([, value]) => value);
  return [...new Set(values)];
}

function simplePublicationYear(raw) {
  const match = String(raw || "").match(/^\s*(\d{4})\s*$/);
  return match ? Number(match[1]) : null;
}

const selected = config.entradas.map((migration) => {
  const legacy = works.get(migration.id);
  if (!legacy) throw new Error(`La entrada ${migration.id} no existe en ${sourcePath}.`);
  const languages = deriveLanguages(legacy.tr);
  const publication = simplePublicationYear(legacy.y);
  const migrated = structuredClone(migration);
  migrated.lenguas_publicacion_candidatas = languages;
  if (!migrated.temporalidades) {
    migrated.temporalidades_candidatas = {
      valor_heredado: legacy.y,
      publicacion: publication,
      requiere_revision: publication === null,
    };
  }
  migrated.revision = {
    ...migrated.revision,
    responsable: approval.responsable,
    fecha: approval.fecha,
  };
  return { heredado: structuredClone(legacy), migracion2: migrated };
});

const pilotIds = new Set(selected.map((item) => item.heredado.id));
const relationKey = (a, b) => `${a}::${b}`;
const relationDecisions = new Map();
for (const decision of config.relaciones || []) {
  const direct = relationKey(decision.a, decision.b);
  const reverse = relationKey(decision.b, decision.a);
  if (relationDecisions.has(direct) || relationDecisions.has(reverse)) {
    throw new Error(`Decisión de relación duplicada: ${decision.a}–${decision.b}.`);
  }
  relationDecisions.set(direct, decision);
  relationDecisions.set(reverse, decision);
}
const relations = atlas.relaciones
  .filter((relation) => pilotIds.has(relation.a) && pilotIds.has(relation.b))
  .map((relation) => {
    const decision = relationDecisions.get(relationKey(relation.a, relation.b));
    if (!decision) {
      throw new Error(`Falta estado explícito para la relación ${relation.a}–${relation.b}.`);
    }
    const migrated = structuredClone(decision);
    delete migrated.a;
    delete migrated.b;
    const effective = migrated.redirigir_a || { a: relation.a, b: relation.b };
    delete migrated.redirigir_a;
    migrated.extremos_efectivos = effective;
    migrated.revision = {
      responsable: approval.responsable,
      fecha: approval.fecha,
    };
    return { heredada: structuredClone(relation), migracion2: migrated };
  });

const output = {
  meta: {
    titulo: "Atlas 2.0 · lote piloto de 10 entradas",
    version: config.version,
    esquema: catalogs.version_esquema,
    generado: approval.fecha,
    aprobacion: structuredClone(approval),
    corpus_fuente: atlas.meta.version,
    corpus_fuente_sha256: crypto.createHash("sha256").update(sourceText).digest("hex"),
    recuentos_fuente: { entradas: atlas.obras.length, relaciones: atlas.relaciones.length, lugares: Object.keys(atlas.lugares).length },
    recuentos_piloto: {
      registros_heredados: selected.length,
      nodos_efectivos: selected.filter((item) => item.migracion2.accion_entidad !== "redireccion").length,
      redirecciones: selected.filter((item) => item.migracion2.accion_entidad === "redireccion").length,
      relaciones_internas: relations.length
    },
    regla: catalogs.regla_transicion,
    modifica_corpus_publico: false
  },
  catalogos: path.basename(catalogPath),
  entradas: selected,
  relaciones_entre_entradas_piloto: relations
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`);
console.log(`Piloto generado: ${path.relative(root, outputPath)}`);
console.log(`${selected.length} entradas; ${relations.length} relaciones internas; corpus público sin cambios.`);
