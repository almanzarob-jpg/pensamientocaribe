#!/usr/bin/env node

/**
 * Genera la capa de temporalidad del atlas (lote TP01).
 *
 * Separa dos cosas que el campo heredado `y` amontona en una sola cadena:
 *   publicacion       — cuándo se escribió sobre el Caribe
 *   periodo_estudiado — cuándo ocurrió lo que la obra investiga
 *
 * La cronología actual del atlas ordena por `y`, es decir por fecha de
 * publicación académica. Ordena la producción del conocimiento sobre el Caribe,
 * no los fenómenos caribeños. La marealéctica está enunciada en el marco
 * conceptual y contradicha por la vista que debería encarnarla; esta capa es lo
 * que permite corregirlo.
 *
 * Tres procedencias, con distinto peso probatorio:
 *   dictamen        — viene de P00, S01, A01 o A02, ya aprobado. Estado: confirmado.
 *   derivado        — el campo `y` es un año limpio de cuatro cifras. Estado: candidatura.
 *   sin_derivar     — `y` está vacío o guarda algo que no es un año. Estado: pendiente.
 *
 * Un periodo estudiado nunca se deriva mecánicamente: exige leer la obra. Por eso
 * solo lo traen las entradas dictaminadas.
 *
 * Uso desde la raíz del repositorio:
 *   node scripts/generar-temporalidad.mjs            (escribe el lote)
 *   node scripts/generar-temporalidad.mjs --simular  (no escribe nada)
 */

import fs from "node:fs";
import path from "node:path";

const raiz = process.cwd();
const simular = process.argv.includes("--simular");
const leer = (p) => JSON.parse(fs.readFileSync(path.join(raiz, p), "utf8"));

const corpus = leer("data/agua-de-por-medio/datos-atlas.json");
const CAPAS = [
  "data/agua-de-por-medio/atlas-2/piloto-generado.json",
  "data/agua-de-por-medio/atlas-2/lotes/s01-generado.json",
  "data/agua-de-por-medio/atlas-2/lotes/a01-generado.json",
  "data/agua-de-por-medio/atlas-2/lotes/a02-generado.json",
];

// ------------------------------------------- lo ya dictaminado en capas cerradas
const dictaminado = new Map();
for (const ruta of CAPAS) {
  let capa;
  try { capa = leer(ruta); } catch { continue; }
  for (const entrada of capa.entradas || []) {
    const m = entrada.migracion2;
    if (!m || !m.temporalidades) continue;
    const t = m.temporalidades;
    if (!t.publicacion && !t.periodo_estudiado) continue;
    dictaminado.set(m.id, {
      publicacion: t.publicacion || null,
      periodo_estudiado: t.periodo_estudiado || null,
      lote: path.basename(ruta).replace("-generado.json", "").replace("piloto", "P00").toUpperCase(),
    });
  }
}

// --------------------------------------------------------------- construcción
const AÑO_LIMPIO = /^\d{4}$/;
const registros = [];
let confirmados = 0, candidaturas = 0, pendientes = 0, conPeriodo = 0;

for (const obra of corpus.obras) {
  const yHeredado = String(obra.y || "").trim();
  const d = dictaminado.get(obra.id);
  const r = { id: obra.id, y_heredado: yHeredado };

  if (d) {
    r.publicacion = d.publicacion;
    r.periodo_estudiado = d.periodo_estudiado;
    r.procedencia = "dictamen " + d.lote;
    r.estado = "confirmado";
    confirmados++;
    if (d.periodo_estudiado) conPeriodo++;
  } else if (AÑO_LIMPIO.test(yHeredado)) {
    r.publicacion = { valor: Number(yHeredado), era: "EC", precision: "exacta" };
    r.periodo_estudiado = null;
    r.procedencia = "derivado del campo y";
    r.estado = "candidatura";
    candidaturas++;
  } else {
    r.publicacion = null;
    r.periodo_estudiado = null;
    r.procedencia = "sin_derivar";
    r.estado = "pendiente";
    r.motivo = yHeredado ? "el campo y guarda algo que no es un año" : "el campo y está vacío";
    pendientes++;
  }
  registros.push(r);
}

const lote = {
  lote: "TP01",
  nombre: "Temporalidad: separación de publicación y periodo estudiado",
  fecha: new Date().toISOString().slice(0, 10),
  base: `datos-atlas.json v${corpus.meta.version} · ${corpus.obras.length} entradas`,
  limite:
    "Capa aditiva. No modifica el campo heredado y, ni datos-atlas.json, ni el orden actual de la cronología. " +
    "Un periodo estudiado no se deriva nunca de forma mecánica: exige lectura de la obra.",
  procedencias: {
    dictamen: "Aprobado en una capa cerrada (P00, S01, A01 o A02). Estado: confirmado.",
    "derivado del campo y": "El campo y es un año limpio de cuatro cifras. Estado: candidatura, sujeta a confirmación.",
    sin_derivar: "El campo y está vacío o guarda una cadena que no es un año. Estado: pendiente.",
  },
  recuento: {
    entradas: registros.length,
    confirmados,
    candidaturas,
    pendientes,
    con_periodo_estudiado: conPeriodo,
    sin_periodo_estudiado: registros.length - conPeriodo,
  },
  registros,
};

console.log("Capa de temporalidad TP01");
console.log("  entradas:                 " + registros.length);
console.log("  confirmadas por dictamen: " + confirmados);
console.log("  candidaturas derivadas:   " + candidaturas);
console.log("  pendientes:               " + pendientes);
console.log("  con periodo estudiado:    " + conPeriodo + "  (el resto exige lectura)");

if (simular) {
  console.log("\n[SIMULACIÓN] No se escribió ningún archivo.");
  process.exit(0);
}
const destino = "data/agua-de-por-medio/atlas-2/lotes/tp01-temporalidad.json";
fs.writeFileSync(path.join(raiz, destino), JSON.stringify(lote, null, 2) + "\n", "utf8");
console.log("\nEscrito " + destino);
