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
const batchId = config.lote || "P00";
const relationField = config.campo_relaciones || "relaciones_lote";

if (approval?.estado !== "aprobado" || !approval.fecha || !approval.responsable) {
  throw new Error("El lote exige aprobación, fecha y responsable explícitos.");
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
  migrated.lenguas_publicacion_candidatas = migrated.lenguas_publicacion || languages;
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

const relationKey = (a, b) => `${a}::${b}`;
const sourceRelations = new Map();
for (const relation of atlas.relaciones) {
  const direct = relationKey(relation.a, relation.b);
  const reverse = relationKey(relation.b, relation.a);
  if (sourceRelations.has(direct) || sourceRelations.has(reverse)) {
    throw new Error(`El corpus contiene más de una relación para ${relation.a}–${relation.b}.`);
  }
  sourceRelations.set(direct, relation);
  sourceRelations.set(reverse, relation);
}
const seenRelationDecisions = new Set();
const relations = (config.relaciones || []).map((decision) => {
    const direct = relationKey(decision.a, decision.b);
    const reverse = relationKey(decision.b, decision.a);
    if (seenRelationDecisions.has(direct) || seenRelationDecisions.has(reverse)) {
      throw new Error(`Decisión de relación duplicada: ${decision.a}–${decision.b}.`);
    }
    seenRelationDecisions.add(direct);
    seenRelationDecisions.add(reverse);
    const relation = sourceRelations.get(direct);
    if (!relation || relation.a !== decision.a || relation.b !== decision.b) {
      throw new Error(`La relación ${decision.a}–${decision.b} no existe con esa orientación en ${sourcePath}.`);
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

const batchCounts = {
  registros_heredados: selected.length,
  nodos_efectivos: selected.filter((item) => item.migracion2.accion_entidad !== "redireccion").length,
  redirecciones: selected.filter((item) => item.migracion2.accion_entidad === "redireccion").length,
  relaciones_revisadas: relations.length
};

const output = {
  meta: {
    titulo: config.titulo || `Atlas 2.0 · lote ${batchId}`,
    lote: batchId,
    version: config.version,
    esquema: catalogs.version_esquema,
    generado: approval.fecha,
    aprobacion: structuredClone(approval),
    corpus_fuente: atlas.meta.version,
    corpus_fuente_sha256: crypto.createHash("sha256").update(sourceText).digest("hex"),
    recuentos_fuente: { entradas: atlas.obras.length, relaciones: atlas.relaciones.length, lugares: Object.keys(atlas.lugares).length },
    recuentos_lote: batchCounts,
    ...(batchId === "P00" ? { recuentos_piloto: { ...batchCounts, relaciones_internas: relations.length } } : {}),
    regla: catalogs.regla_transicion,
    modifica_corpus_publico: false
  },
  catalogos: path.basename(catalogPath),
  entradas: selected,
  [relationField]: relations
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`);
console.log(`Lote ${batchId} generado: ${path.relative(root, outputPath)}`);
console.log(`${selected.length} entradas; ${relations.length} relaciones revisadas; corpus público sin cambios.`);
