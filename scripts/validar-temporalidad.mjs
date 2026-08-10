#!/usr/bin/env node

/**
 * Validador de la capa de temporalidad (lote TP01).
 *
 * Comprueba que la capa es estrictamente aditiva y que no afirma más de lo que
 * puede sostener. Las reglas vienen del esquema aprobado en P00 y del punto 27
 * de las reglas bloqueantes: las fechas admiten era y precisión, y un periodo no
 * puede invertirse.
 *
 * Uso desde la raíz del repositorio:
 *   node scripts/validar-temporalidad.mjs
 *
 * Los errores bloquean la integración (código de salida 1).
 */

import fs from "node:fs";
import path from "node:path";

const raiz = process.cwd();
const leer = (p) => JSON.parse(fs.readFileSync(path.join(raiz, p), "utf8"));
const corpus = leer("data/agua-de-por-medio/datos-atlas.json");
const lote = leer("data/agua-de-por-medio/atlas-2/lotes/tp01-temporalidad.json");

const errores = [];
const avisos = [];
const err = (c, m) => errores.push(`[ERROR ${c}] ${m}`);
const avi = (c, m) => avisos.push(`[ADVERTENCIA ${c}] ${m}`);

const ERAS = new Set(["AEC", "EC"]);
const PRECISIONES = new Set(["exacta", "aproximada"]);
const ESTADOS = new Set(["confirmado", "candidatura", "pendiente"]);
const obras = new Map(corpus.obras.map((o) => [o.id, o]));

// Una fecha es un objeto con valor, era y precisión. No se admite un número suelto:
// un año sin era ni precisión afirma una exactitud que casi nunca se tiene.
const validarFecha = (f, donde) => {
  if (f === null || f === undefined) return;
  if (typeof f !== "object") { err("FECHA_FORMA", `${donde}: la fecha debe ser un objeto, no ${typeof f}.`); return; }
  if (!Number.isInteger(f.valor)) err("FECHA_VALOR", `${donde}: valor ausente o no entero.`);
  if (!ERAS.has(f.era)) err("FECHA_ERA", `${donde}: era «${f.era}» fuera del vocabulario (AEC, EC).`);
  if (!PRECISIONES.has(f.precision)) err("FECHA_PRECISION", `${donde}: precisión «${f.precision}» fuera del vocabulario.`);
};

const vistos = new Set();
let confirmados = 0, candidaturas = 0, pendientes = 0, conPeriodo = 0, sinPublicacion = 0;

for (const r of lote.registros || []) {
  const o = obras.get(r.id);
  if (!o) { err("ID", `${r.id}: no existe en el corpus.`); continue; }
  if (vistos.has(r.id)) err("ID_DUPLICADO", `${r.id}: aparece más de una vez.`);
  vistos.add(r.id);

  // La capa no puede alterar el campo heredado: se comprueba que lo copia literal.
  if (r.y_heredado !== String(o.y || "").trim())
    err("HEREDADO", `${r.id}: y_heredado dice «${r.y_heredado}» y el corpus dice «${String(o.y || "").trim()}».`);

  if (!ESTADOS.has(r.estado)) err("ESTADO", `${r.id}: estado «${r.estado}» no reconocido.`);
  if (r.estado === "confirmado") confirmados++;
  if (r.estado === "candidatura") candidaturas++;
  if (r.estado === "pendiente") pendientes++;

  validarFecha(r.publicacion, `${r.id} · publicacion`);
  if (!r.publicacion) sinPublicacion++;

  const p = r.periodo_estudiado;
  if (p) {
    conPeriodo++;
    validarFecha(p.inicio, `${r.id} · periodo.inicio`);
    validarFecha(p.fin, `${r.id} · periodo.fin`);
    if (p.precision && !PRECISIONES.has(p.precision))
      err("PERIODO_PRECISION", `${r.id}: precisión del periodo fuera del vocabulario.`);
    // Regla 27 del piloto: un periodo no puede invertirse.
    if (p.inicio && p.fin && p.inicio.valor > p.fin.valor)
      err("PERIODO_INVERTIDO", `${r.id}: el periodo empieza en ${p.inicio.valor} y termina en ${p.fin.valor}.`);
    // Un inicio abierto es legítimo, pero debe explicarse: si no, es un hueco disfrazado.
    if (!p.inicio && !p.descripcion)
      err("PERIODO_ABIERTO", `${r.id}: inicio sin fijar y sin descripción que lo explique.`);
    // Estudiar más allá de la propia publicación sería anticipar el futuro.
    if (p.fin && r.publicacion && p.fin.valor > r.publicacion.valor)
      err("PERIODO_FUTURO", `${r.id}: estudia hasta ${p.fin.valor} y se publicó en ${r.publicacion.valor}.`);
  }

  // Un periodo estudiado no puede derivarse a máquina: exige lectura.
  if (p && r.procedencia === "derivado del campo y")
    err("PERIODO_DERIVADO", `${r.id}: un periodo estudiado no puede salir del campo y.`);
  // Y nada mecánico puede presentarse como confirmado.
  if (r.estado === "confirmado" && !String(r.procedencia || "").startsWith("dictamen"))
    err("CONFIRMACION", `${r.id}: confirmado sin dictamen que lo respalde.`);
  if (r.estado === "candidatura" && r.procedencia !== "derivado del campo y")
    err("CANDIDATURA", `${r.id}: candidatura con procedencia inesperada «${r.procedencia}».`);
}

// Lo que el corpus tiene y la capa no cubre sería un silencio no declarado.
const faltan = corpus.obras.filter((o) => !vistos.has(o.id)).map((o) => o.id);
if (faltan.length) err("COBERTURA", `${faltan.length} entradas del corpus sin registro: ${faltan.slice(0, 8).join(", ")}.`);

if (pendientes) avi("PENDIENTE", `${pendientes} entradas sin fecha de publicación derivable del campo y.`);
avi("PERIODO", `${conPeriodo} de ${vistos.size} entradas tienen periodo estudiado; las ${vistos.size - conPeriodo} restantes exigen lectura.`);

console.log(`Capa TP01 sobre el corpus v${corpus.meta.version}: ${vistos.size} registros.`);
console.log(`  confirmados por dictamen: ${confirmados} · candidaturas derivadas: ${candidaturas} · pendientes: ${pendientes}`);
console.log(`  con periodo estudiado: ${conPeriodo} · sin fecha de publicación: ${sinPublicacion}\n`);
avisos.forEach((m) => console.log(m));
errores.forEach((m) => console.log(m));
console.log(`\nResultado: ${errores.length} error(es), ${avisos.length} advertencia(s).`);
process.exit(errores.length ? 1 : 0);
