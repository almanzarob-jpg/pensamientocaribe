#!/usr/bin/env node

/**
 * Validador de la capa de fenómenos (Atlas 2.0 · lote F).
 *
 * Uso desde la raíz del repositorio:
 *   node scripts/validar-fenomenos.mjs
 *   node scripts/validar-fenomenos.mjs <datos-atlas.json> <catalogo-fenomenos.json> <lote.json>
 *
 * Comprueba que la capa es estrictamente aditiva: no lee ni escribe el campo f
 * ni el catálogo fenomenos del corpus publicado, y verifica que el f_heredado
 * declarado en el lote coincide exactamente con el del corpus vivo.
 *
 * Los errores bloquean la integración (código de salida 1).
 */

import fs from "node:fs";

const [
  RUTA_CORPUS = "data/agua-de-por-medio/datos-atlas.json",
  RUTA_CATALOGO = "data/agua-de-por-medio/atlas-2/catalogo-fenomenos.json",
  RUTA_LOTE = "data/agua-de-por-medio/atlas-2/lotes/f01-muestra.json",
] = process.argv.slice(2);

const leer = (p) => JSON.parse(fs.readFileSync(p, "utf8"));

const errores = [];
const avisos = [];
const info = [];
const err = (c, m) => errores.push(`[ERROR ${c}] ${m}`);
const avi = (c, m) => avisos.push(`[ADVERTENCIA ${c}] ${m}`);

const corpus = leer(RUTA_CORPUS);
const catalogo = leer(RUTA_CATALOGO);
const lote = leer(RUTA_LOTE);

const obras = new Map(corpus.obras.map((o) => [o.id, o]));
const familias = new Set(Object.keys(catalogo.familias || {}));
const fenomenos = catalogo.fenomenos || {};
const claves = new Set(Object.keys(fenomenos));

// Corrientes del esquema 2.0, si el catálogo de transición está presente.
let corrientes = null;
try {
  corrientes = new Set(
    Object.keys(leer("data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json").corrientes)
  );
} catch {
  avi("CATALOGO_2", "No se pudo leer catalogos-atlas-2.json; no se comprueban las corrientes declaradas.");
}

// ---------------------------------------------------------------- catálogo
for (const [clave, f] of Object.entries(fenomenos)) {
  if (!/^[a-z0-9_]+$/.test(clave)) err("FEN_CLAVE", `Clave fuera de minúsculas ASCII: ${clave}`);
  for (const campo of ["familia", "label", "label_en", "glosa", "criterio", "no_confundir_con", "corrientes", "anclas"]) {
    if (f[campo] === undefined || f[campo] === null || f[campo] === "")
      err("FEN_CAMPO", `${clave}: falta el campo obligatorio ${campo}`);
  }
  if (f.familia && !familias.has(f.familia))
    err("FEN_FAMILIA", `${clave}: familia inexistente «${f.familia}»`);

  const anclas = f.anclas || [];
  if (anclas.length < 2)
    err("FEN_ANCLAS", `${clave}: exige al menos dos entradas ancla, tiene ${anclas.length}`);
  const fantasma = anclas.filter((a) => !obras.has(a));
  if (fantasma.length)
    err("FEN_ANCLA_INEXISTENTE", `${clave}: ancla que no existe en el corpus → ${fantasma.join(", ")}`);
  if (new Set(anclas).size !== anclas.length)
    err("FEN_ANCLA_REPETIDA", `${clave}: ancla repetida`);

  if (corrientes) {
    const malas = (f.corrientes || []).filter((c) => !corrientes.has(c));
    if (malas.length)
      err("FEN_CORRIENTE", `${clave}: corriente inexistente → ${malas.join(", ")}`);
  }
  if ((f.corrientes || []).length === 0)
    err("FEN_CORRIENTE", `${clave}: no declara ninguna corriente compatible`);
}

// ------------------------------------------------------------------- lote
const vistos = new Set();
for (const a of lote.asignaciones || []) {
  const o = obras.get(a.id);
  if (!o) {
    err("LOTE_ID", `${a.id}: no existe en el corpus`);
    continue;
  }
  if (vistos.has(a.id)) err("LOTE_DUPLICADO", `${a.id}: aparece más de una vez en el lote`);
  vistos.add(a.id);

  // La capa no puede alterar el campo heredado: se comprueba que lo copia bien.
  const heredado = (a.f_heredado || []).join("|");
  const real = (o.f || []).join("|");
  if (heredado !== real)
    err("LOTE_HEREDADO", `${a.id}: f_heredado dice «${heredado}» y el corpus dice «${real}»`);

  const asignados = a.fenomenos_asignados || [];
  const inexistentes = asignados.filter((f) => !claves.has(f));
  if (inexistentes.length)
    err("LOTE_FENOMENO", `${a.id}: fenómeno fuera del catálogo → ${inexistentes.join(", ")}`);
  if (new Set(asignados).size !== asignados.length)
    err("LOTE_REPETIDO", `${a.id}: fenómeno repetido`);
  if (asignados.length === 0) err("LOTE_VACIO", `${a.id}: sin ningún fenómeno asignado`);
  if (asignados.length === 1 && !a.alerta)
    err("LOTE_MINIMO", `${a.id}: un solo fenómeno y sin alerta declarada`);
  if (asignados.length > 4) err("LOTE_MAXIMO", `${a.id}: más de cuatro fenómenos`);

  if (!a.fundamento || a.fundamento.trim().length < 40)
    err("LOTE_FUNDAMENTO", `${a.id}: fundamento ausente o demasiado breve`);
  if (!["propuesto", "revisado", "confirmado"].includes(a.estado))
    err("LOTE_ESTADO", `${a.id}: estado no reconocido «${a.estado}»`);
  if (a.estado === "confirmado" && !a.fuente)
    err("LOTE_CONFIRMACION", `${a.id}: confirmado sin fuente localizable`);
  if (asignados.length === 1) avi("MINIMO", `${a.id}: un solo fenómeno, con alerta declarada`);
}

// ------------------------------------------------- garantía de no invasión
const camposProhibidos = ["f", "fenomenos", "l", "tr", "y", "k", "t", "a"];
for (const a of lote.asignaciones || []) {
  const invade = camposProhibidos.filter((c) => Object.prototype.hasOwnProperty.call(a, c));
  if (invade.length)
    err("INVASION", `${a.id}: el lote escribe campos del corpus publicado → ${invade.join(", ")}`);
}

// --------------------------------------------------------------- medición
const n = (lote.asignaciones || []).length;
const usados = new Map();
(lote.asignaciones || []).forEach((a) =>
  (a.fenomenos_asignados || []).forEach((f) => usados.set(f, (usados.get(f) || 0) + 1))
);
const comboViejo = new Set((lote.asignaciones || []).map((a) => [...(a.f_heredado || [])].sort().join("+")));
const comboNuevo = new Set((lote.asignaciones || []).map((a) => [...(a.fenomenos_asignados || [])].sort().join("+")));
const maxViejo = Math.max(
  ...[...new Set((lote.asignaciones || []).flatMap((a) => a.f_heredado || []))].map(
    (t) => (lote.asignaciones || []).filter((a) => (a.f_heredado || []).includes(t)).length
  )
);
const maxNuevo = Math.max(...usados.values());

info.push(`Catálogo: ${claves.size} fenómenos en ${familias.size} familias.`);
info.push(`Anclas distintas del catálogo: ${new Set(Object.values(fenomenos).flatMap((f) => f.anclas || [])).size} entradas del corpus.`);
info.push(`Lote ${lote.lote}: ${n} entradas, ${usados.size} fenómenos ejercitados.`);
info.push(`Combinaciones distintas — heredado: ${comboViejo.size}/${n}; fenómenos: ${comboNuevo.size}/${n}.`);
info.push(`Etiqueta más frecuente — heredado: ${maxViejo}/${n} (${Math.round((100 * maxViejo) / n)}%); fenómenos: ${maxNuevo}/${n} (${Math.round((100 * maxNuevo) / n)}%).`);
const sinUsar = [...claves].filter((c) => !usados.has(c));
if (sinUsar.length) info.push(`Fenómenos que la muestra no ejercita (${sinUsar.length}): ${sinUsar.join(", ")}`);

// ----------------------------------------------------------------- salida
info.forEach((m) => console.log(`[INFO] ${m}`));
avisos.forEach((m) => console.log(m));
errores.forEach((m) => console.log(m));
console.log(`\nResultado: ${errores.length} error(es), ${avisos.length} advertencia(s).`);
process.exit(errores.length ? 1 : 0);
