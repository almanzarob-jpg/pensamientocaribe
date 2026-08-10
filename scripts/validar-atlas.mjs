#!/usr/bin/env node

/**
 * Validador del Atlas de Pensamiento Caribe.
 *
 * Uso desde la raíz del repositorio:
 *   node scripts/validar-atlas.mjs
 *   node scripts/validar-atlas.mjs data/agua-de-por-medio/datos-atlas.json data/agua-de-por-medio/datos-atlas.js
 *   node scripts/validar-atlas.mjs --estricto-2
 *
 * Los errores bloquean la publicación (código de salida 1). Las advertencias
 * documentan deudas editoriales y no bloquean el corpus heredado 1.x.
 */

import fs from "node:fs";
import path from "node:path";
import { isDeepStrictEqual } from "node:util";

const args = process.argv.slice(2);
const strict2 = args.includes("--estricto-2");
const files = args.filter((arg) => arg !== "--estricto-2");
const jsonPath = path.resolve(files[0] || "data/agua-de-por-medio/datos-atlas.json");
const jsPath = path.resolve(files[1] || "data/agua-de-por-medio/datos-atlas.js");

const report = {
  errors: [],
  warnings: [],
  info: [],
  error(code, message) { this.errors.push({ code, message }); },
  warn(code, message) { this.warnings.push({ code, message }); },
  note(message) { this.info.push(message); },
};

const isObject = (value) => value !== null && typeof value === "object" && !Array.isArray(value);
const isNonEmptyString = (value) => typeof value === "string" && value.trim().length > 0;
const unique = (values) => [...new Set(values)];
const listIds = (values, limit = 12) => {
  const head = values.slice(0, limit).join(", ");
  return values.length > limit ? `${head} (+${values.length - limit})` : head;
};
const pendingSource = (source) => /por corroborar/i.test(source || "");

const PROCEDENCIAS = new Set([
  "corpus heredado", "siembra nueva", "aporte externo", "manifestación",
  "pendiente de incorporación",
]);
const PROCESOS = new Set([
  "migración", "reclasificación", "siembra", "corrección bibliográfica",
  "fusión", "división",
]);
const REVISION_ESTADOS = new Set([
  "pendiente_revision_con_texto", "candidatura_preliminar", "confirmada", "revisada",
]);
const RELACION_TIPOS = new Set(["resonancia", "disonancia"]);
const RELACION_ESTADOS = new Set(["corroborada", "por_corroborar"]);
const FRICCION_CLASES = new Set([
  "crítica explícita", "incompatibilidad conceptual", "desestabilización de una categoría",
  "conflicto entre epistemologías", "objeción documentada", "diferencia productiva argumentada",
]);
const FUNCIONES_ORILLA = new Set([
  "territorio estudiado", "lugar de producción intelectual", "destino migratorio",
  "lugar de circulación", "territorio comparado", "espacio diaspórico",
]);
const TIPOS_RUTA = new Set([
  "navegación indígena", "trata", "fuga", "migración laboral", "exilio", "refugio",
  "deportación", "retorno", "circulación intelectual", "circulación musical",
  "circulación religiosa", "comercio", "ruta imperial", "ruta marítima", "conexión portuaria",
]);
const OPERACIONES = new Set([
  "reconstruir un archivo", "producir etnografía", "teorizar", "fabular ante el silencio",
  "narrar", "cartografiar", "escuchar", "traducir", "seguir una ruta", "comparar orillas",
  "preservar una memoria", "elaborar un concepto", "documentar una práctica",
  "intervenir políticamente", "confrontar una categoría", "producir testimonio",
]);
const LENGUAS = new Set([
  "inglés", "español", "francés", "neerlandés", "portugués", "danés", "criollo", "otro",
]);

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    report.error("ARCHIVO_JSON", `No se pudo leer ${filePath}: ${error.message}`);
    return null;
  }
}

function readJsMirror(filePath) {
  try {
    const source = fs.readFileSync(filePath, "utf8");
    const marker = "window.ATLAS=";
    const start = source.indexOf(marker);
    if (start < 0) throw new Error("no contiene la asignación window.ATLAS=");
    let payload = source.slice(start + marker.length).trim();
    if (payload.endsWith(";")) payload = payload.slice(0, -1);
    return JSON.parse(payload);
  } catch (error) {
    report.error("ARCHIVO_JS", `No se pudo leer el espejo ${filePath}: ${error.message}`);
    return null;
  }
}

function validateTopLevel(data) {
  if (!isObject(data)) {
    report.error("RAIZ", "La raíz del corpus debe ser un objeto JSON.");
    return false;
  }
  if (!isObject(data.meta)) report.error("META", "Falta el objeto meta.");
  if (!isObject(data.fenomenos) && !isObject(data.corrientes)) {
    report.error("CATALOGO", "Falta el catálogo fenomenos (1.x) o corrientes (2.x).");
  }
  if (!isObject(data.lugares)) report.error("LUGARES", "Falta el catálogo de lugares.");
  if (!Array.isArray(data.obras)) report.error("OBRAS", "obras debe ser una lista.");
  if (!Array.isArray(data.relaciones)) report.error("RELACIONES", "relaciones debe ser una lista.");
  return report.errors.length === 0;
}

function validatePlaces(data) {
  for (const [id, place] of Object.entries(data.lugares)) {
    if (!Array.isArray(place) || place.length < 4) {
      report.error("LUGAR_FORMA", `El lugar ${id} debe conservar la forma [lat, lng, label, tipo].`);
      continue;
    }
    if (!Number.isFinite(place[0]) || !Number.isFinite(place[1])) {
      report.error("LUGAR_COORDENADAS", `El lugar ${id} tiene coordenadas inválidas.`);
    }
    if (!isNonEmptyString(place[2]) || !isNonEmptyString(place[3])) {
      report.error("LUGAR_METADATOS", `El lugar ${id} necesita etiqueta y tipo.`);
    }
  }
}

function validateLegacyWork(work, index, data, seenIds, editorial) {
  const where = `obras[${index}]`;
  const required = ["id", "k", "t", "a", "y", "f", "l", "tr", "ap"];
  for (const field of required) {
    if (!(field in work)) report.error("OBRA_CAMPO", `${where} no contiene el campo heredado ${field}.`);
  }
  if (!isNonEmptyString(work.id)) {
    report.error("OBRA_ID", `${where} tiene un identificador vacío.`);
    return;
  }
  if (seenIds.has(work.id)) report.error("ID_DUPLICADO", `Identificador repetido: ${work.id}.`);
  seenIds.add(work.id);
  if (!/^[a-z0-9_]+$/.test(work.id)) editorial.idsNoCanonicos.push(work.id);

  if (!new Set(["obra", "manifestacion"]).has(work.k)) {
    report.error("OBRA_TIPO", `${work.id}: k debe ser obra o manifestacion.`);
  }
  if (!isNonEmptyString(work.t)) report.error("OBRA_TITULO", `${work.id}: título vacío.`);
  if (!isNonEmptyString(work.a)) report.error("OBRA_AUTORIA", `${work.id}: autoría vacía.`);
  if (!isNonEmptyString(work.ap)) report.error("OBRA_APORTE", `${work.id}: aporte vacío.`);

  if (!Array.isArray(work.f) || work.f.length < 1 || work.f.length > 3) {
    report.error("OBRA_FENOMENOS", `${work.id}: f debe contener entre uno y tres fenómenos.`);
  } else {
    if (unique(work.f).length !== work.f.length) {
      report.error("OBRA_FENOMENO_REPETIDO", `${work.id}: repite un fenómeno en f.`);
    }
    for (const phenomenon of work.f) {
      if (!Object.hasOwn(data.fenomenos || {}, phenomenon)) {
        report.error("OBRA_FENOMENO_INEXISTENTE", `${work.id}: fenómeno inexistente ${phenomenon}.`);
      }
    }
  }
  if (!Object.hasOwn(data.lugares, work.l)) {
    report.error("OBRA_LUGAR_INEXISTENTE", `${work.id}: lugar inexistente ${work.l}.`);
  }
  if (typeof work.tr !== "string") report.error("OBRA_TR", `${work.id}: tr debe ser texto durante la transición.`);

  if (!isNonEmptyString(work.y)) editorial.sinFecha.push(work.id);
  if (/\s\/\s/.test(work.t || "")) editorial.entradasCompuestas.push(work.id);
  const placeholder = /^(archivo|borrador(?:\s*\/\s*archivo)?|sin autor(?:ía)?)$/i.test((work.a || "").trim());
  if (placeholder) editorial.autoriasPendientes.push(work.id);
  if (work.k === "manifestacion" && !placeholder && isNonEmptyString(work.a)) {
    editorial.manifestacionesConAutoria.push(work.id);
  }
}

function validateProcesses(work) {
  if (work.procedencia !== undefined && !PROCEDENCIAS.has(work.procedencia)) {
    report.error("PROCEDENCIA", `${work.id}: procedencia fuera del vocabulario.`);
  }
  if (work.proceso !== undefined) {
    if (!Array.isArray(work.proceso) || work.proceso.length === 0) {
      report.error("PROCESO", `${work.id}: proceso debe ser una lista no vacía.`);
    } else {
      for (const process of work.proceso) {
        if (!PROCESOS.has(process)) report.error("PROCESO", `${work.id}: proceso no permitido: ${process}.`);
      }
      if (work.proceso.includes("fusión") && work.proceso.includes("división")) {
        report.error("PROCESO_COMBINACION", `${work.id}: no puede llevar fusión y división a la vez.`);
      }
      if (work.procedencia === "siembra nueva" && work.proceso.some((p) => p === "migración" || p === "reclasificación")) {
        report.error("PROCESO_COMBINACION", `${work.id}: una siembra nueva no puede ser migración ni reclasificación.`);
      }
      if ((work.procedencia === "corpus heredado" || work.procedencia === "manifestación") && work.proceso.includes("siembra")) {
        report.error("PROCESO_COMBINACION", `${work.id}: una entrada heredada no puede llevar proceso siembra.`);
      }
      if (work.procedencia === "pendiente de incorporación" && work.proceso.some((p) => p !== "siembra")) {
        report.error("PROCESO_COMBINACION", `${work.id}: pendiente de incorporación solo admite proceso siembra.`);
      }
    }
  }
}

function validateReview(work, placeholderAuthor) {
  if (work.revision === undefined) return;
  if (!isObject(work.revision) || !REVISION_ESTADOS.has(work.revision.estado)) {
    report.error("REVISION", `${work.id}: estado de revisión inválido.`);
    return;
  }
  if (work.revision.estado === "candidatura_preliminar" && !isNonEmptyString(work.corriente_candidata)) {
    report.error("REVISION_CANDIDATURA", `${work.id}: candidatura preliminar sin corriente_candidata.`);
  }
  if ((work.revision.estado === "confirmada" || work.revision.estado === "revisada") && !isNonEmptyString(work.revision.fundamento)) {
    report.error("REVISION_FUNDAMENTO", `${work.id}: revisión ${work.revision.estado} sin fundamento.`);
  }
  if (work.procedencia_verificada === false && (work.revision.estado === "confirmada" || work.revision.estado === "revisada")) {
    report.error("REVISION_PROCEDENCIA", `${work.id}: no puede confirmarse con procedencia sin verificar.`);
  }
  if (placeholderAuthor && work.procedencia_verificada === true) {
    report.error("REVISION_AUTORIA", `${work.id}: autoría no identificada con procedencia_verificada=true.`);
  }
}

function validateCurrentsAndMarks(work, data) {
  const currentCatalog = data.corrientes || {};
  if (work.corriente !== undefined && !Object.hasOwn(currentCatalog, work.corriente)) {
    report.error("CORRIENTE", `${work.id}: corriente principal inexistente ${work.corriente}.`);
  }
  if (work.corriente_candidata !== undefined && !Object.hasOwn(currentCatalog, work.corriente_candidata)) {
    report.error("CORRIENTE_CANDIDATA", `${work.id}: corriente candidata inexistente ${work.corriente_candidata}.`);
  }
  if (work.procedencia === "siembra nueva" && work.corriente_candidata !== undefined) {
    report.error("SIEMBRA_CANDIDATURA", `${work.id}: una siembra no debe tener corriente_candidata.`);
  }
  if (work.corrientes_sec !== undefined) {
    if (!Array.isArray(work.corrientes_sec) || work.corrientes_sec.length > 2) {
      report.error("CORRIENTES_SEC", `${work.id}: corrientes_sec debe ser una lista de máximo dos.`);
    } else {
      for (const current of work.corrientes_sec) {
        if (!Object.hasOwn(currentCatalog, current)) report.error("CORRIENTE_SEC", `${work.id}: corriente secundaria inexistente ${current}.`);
        if (current === work.corriente) report.error("CORRIENTE_SEC", `${work.id}: la corriente principal se repite como secundaria.`);
      }
    }
  }

  if (work.marcas !== undefined) {
    if (!Array.isArray(work.marcas)) {
      report.error("MARCAS", `${work.id}: marcas debe ser una lista.`);
    } else {
      for (const mark of work.marcas) {
        if (!isObject(mark) || !isNonEmptyString(mark.m) || !Object.hasOwn(data.marcas || {}, mark.m)) {
          report.error("MARCA", `${work.id}: marca inexistente o mal formada.`);
          continue;
        }
        if (mark.m === "capitalismo_racial" && !isNonEmptyString(mark.mecanismo)) {
          report.error("MARCA_MECANISMO", `${work.id}: capitalismo_racial exige mecanismo.`);
        }
        if (mark.m === "violencias" && !isNonEmptyString(mark.tipo)) {
          report.error("MARCA_TIPO", `${work.id}: violencias exige tipo.`);
        }
      }
    }
  }
}

function validateOperationsAndGeography(work, data) {
  if (work.operaciones !== undefined) {
    if (!Array.isArray(work.operaciones) || work.operaciones.length === 0) {
      report.error("OPERACIONES", `${work.id}: operaciones debe ser una lista no vacía.`);
    } else {
      for (const operation of work.operaciones) {
        if (!OPERACIONES.has(operation)) report.error("OPERACION", `${work.id}: operación no permitida: ${operation}.`);
      }
    }
  }

  if (work.orillas !== undefined) {
    if (!Array.isArray(work.orillas) || work.orillas.length === 0) {
      report.error("ORILLAS", `${work.id}: orillas debe ser una lista no vacía.`);
    } else {
      for (const shore of work.orillas) {
        if (!isObject(shore) || !Object.hasOwn(data.lugares, shore.lugar)) {
          report.error("ORILLA_LUGAR", `${work.id}: orilla con lugar inexistente.`);
        }
        if (!isObject(shore) || !FUNCIONES_ORILLA.has(shore.funcion)) {
          report.error("ORILLA_FUNCION", `${work.id}: función de orilla inválida.`);
        }
      }
    }
  }

  if (work.rutas !== undefined) {
    if (!Array.isArray(work.rutas)) {
      report.error("RUTAS", `${work.id}: rutas debe ser una lista.`);
    } else {
      for (const route of work.rutas) {
        if (!isObject(route) || !TIPOS_RUTA.has(route.tipo)) report.error("RUTA_TIPO", `${work.id}: tipo de ruta inválido.`);
        if (!isObject(route) || !Object.hasOwn(data.lugares, route.origen) || !Object.hasOwn(data.lugares, route.destino)) {
          report.error("RUTA_ORILLAS", `${work.id}: ruta con origen o destino inexistente.`);
        }
        if (!isObject(route) || !isNonEmptyString(route.fuente)) report.error("RUTA_FUENTE", `${work.id}: ruta sin fuente.`);
      }
    }
  }
}

function languageBase(value) {
  return String(value || "").toLowerCase().split(/\s*\(/)[0].trim();
}

function validateLanguagesAndTime(work) {
  if (work.lenguas_publicacion !== undefined) {
    if (!Array.isArray(work.lenguas_publicacion) || work.lenguas_publicacion.length === 0) {
      report.error("LENGUAS", `${work.id}: lenguas_publicacion debe ser una lista no vacía.`);
    } else {
      for (const language of work.lenguas_publicacion) {
        const base = languageBase(language).replace(/ criollo$/, "criollo");
        if (![...LENGUAS].some((allowed) => base === allowed || base.startsWith(`${allowed} `))) {
          report.error("LENGUA", `${work.id}: lengua fuera del vocabulario: ${language}.`);
        }
      }
    }
  }
  if (work.lengua_publicacion !== undefined) {
    report.warn("LENGUA_SINGULAR", `${work.id}: lengua_publicacion singular se acepta en transición; se recomienda lenguas_publicacion como lista.`);
  }

  const time = work.temporalidades;
  if (time === undefined) return;
  if (!isObject(time)) {
    report.error("TEMPORALIDADES", `${work.id}: temporalidades debe ser un objeto.`);
    return;
  }
  const validYear = (year) => Number.isInteger(year) && year >= 1000 && year <= new Date().getFullYear() + 2;
  if (time.publicacion !== undefined && !validYear(time.publicacion)) {
    report.error("TEMP_PUBLICACION", `${work.id}: año de publicación inválido.`);
  }
  if (Array.isArray(time.periodo_estudiado)) {
    const [start, end] = time.periodo_estudiado;
    if (!Number.isFinite(start) || !Number.isFinite(end) || start > end) {
      report.error("TEMP_PERIODO", `${work.id}: periodo_estudiado inválido o invertido.`);
    }
  }
  if (time.periodos_estudiados !== undefined) {
    if (!Array.isArray(time.periodos_estudiados)) {
      report.error("TEMP_PERIODOS", `${work.id}: periodos_estudiados debe ser una lista.`);
    } else {
      for (const period of time.periodos_estudiados) {
        if (!isObject(period) || !Number.isFinite(period.inicio) || !Number.isFinite(period.fin) || period.inicio > period.fin) {
          report.error("TEMP_PERIODO", `${work.id}: periodo estudiado inválido o invertido.`);
        }
      }
    }
  }
}

function validateV2Work(work, schema2) {
  const placeholder = /^(archivo|borrador(?:\s*\/\s*archivo)?|sin autor(?:ía)?)$/i.test((work.a || "").trim());
  if (schema2) {
    for (const field of ["procedencia", "procedencia_verificada", "proceso", "corriente", "operaciones", "orillas", "temporalidades", "revision"]) {
      if (!(field in work)) report.error("V2_CAMPO", `${work.id}: falta el campo 2.0 obligatorio ${field}.`);
    }
    if (!("lenguas_publicacion" in work) && !("lengua_publicacion" in work)) {
      report.error("V2_CAMPO", `${work.id}: falta lenguas_publicacion.`);
    }
  }
  validateProcesses(work);
  validateReview(work, placeholder);
  validateCurrentsAndMarks(work, atlas);
  validateOperationsAndGeography(work, atlas);
  validateLanguagesAndTime(work);
}

function validateRelations(data, workIds) {
  const pairs = new Set();
  const linked = new Set();
  let corroborated = 0;
  let pendingCount = 0;
  const byType = { resonancia: 0, disonancia: 0 };

  data.relaciones.forEach((relation, index) => {
    const where = `relaciones[${index}]`;
    if (!isObject(relation)) {
      report.error("RELACION_FORMA", `${where} debe ser un objeto.`);
      return;
    }
    if (!workIds.has(relation.a) || !workIds.has(relation.b)) {
      report.error("RELACION_EXTREMO", `${where}: extremo inexistente (${relation.a}, ${relation.b}).`);
    }
    if (relation.a === relation.b) report.error("RELACION_REFLEXIVA", `${where}: relación de una entrada consigo misma.`);
    const pair = [relation.a, relation.b].sort().join("::");
    if (pairs.has(pair)) report.error("RELACION_DUPLICADA", `${where}: par repetido ${pair}.`);
    pairs.add(pair);
    linked.add(relation.a);
    linked.add(relation.b);

    if (!RELACION_TIPOS.has(relation.tipo)) report.error("RELACION_TIPO", `${where}: tipo inválido ${relation.tipo}.`);
    else byType[relation.tipo] += 1;
    if (!isNonEmptyString(relation.fuente)) report.error("RELACION_FUENTE", `${where}: fuente vacía.`);

    const isPending = pendingSource(relation.fuente);
    if (isPending) {
      pendingCount += 1;
    } else {
      corroborated += 1;
    }
    if (relation.estado !== undefined) {
      if (!RELACION_ESTADOS.has(relation.estado)) report.error("RELACION_ESTADO", `${where}: estado inválido.`);
      const derived = isPending ? "por_corroborar" : "corroborada";
      if (relation.estado !== derived) report.error("RELACION_ESTADO", `${where}: estado no coincide con la fuente heredada.`);
    }
    if (relation.friccion !== undefined) {
      if (!isObject(relation.friccion) || typeof relation.friccion.hay !== "boolean") {
        report.error("FRICCION", `${where}: friccion debe declarar hay como booleano.`);
      } else if (relation.friccion.hay) {
        if (!FRICCION_CLASES.has(relation.friccion.clase)) report.error("FRICCION_CLASE", `${where}: clase de fricción inválida.`);
        if (!isNonEmptyString(relation.friccion.argumento)) report.error("FRICCION_ARGUMENTO", `${where}: fricción sin argumento.`);
      }
    }
    if (relation.cruce_linguistico !== undefined && typeof relation.cruce_linguistico !== "boolean") {
      report.error("CRUCE_LINGUISTICO", `${where}: cruce_linguistico debe ser booleano.`);
    }
  });

  const disconnected = [...workIds].filter((id) => !linked.has(id));
  if (disconnected.length) report.error("OBRAS_DESCONECTADAS", `Entradas sin ninguna relación: ${listIds(disconnected)}.`);
  report.note(`${corroborated} relaciones corroboradas; ${pendingCount} por corroborar.`);
  report.note(`${byType.resonancia} resonancias; ${byType.disonancia} disonancias.`);
}

function validateCatalogTranslations(data, schema2) {
  if (!schema2) return;
  for (const [id, current] of Object.entries(data.corrientes || {})) {
    if (!isNonEmptyString(current.label) || !isNonEmptyString(current.label_en)) {
      report.error("CORRIENTE_TRADUCCION", `${id}: faltan label o label_en.`);
    }
  }
  for (const [id, mark] of Object.entries(data.marcas || {})) {
    if (!isNonEmptyString(mark.label) || !isNonEmptyString(mark.label_en)) {
      report.error("MARCA_TRADUCCION", `${id}: faltan label o label_en.`);
    }
  }
}

const atlas = readJson(jsonPath);
let mirror = null;
if (fs.existsSync(jsPath)) mirror = readJsMirror(jsPath);
else report.error("ARCHIVO_JS", `No existe el espejo ${jsPath}.`);

if (atlas && validateTopLevel(atlas)) {
  if (mirror && !isDeepStrictEqual(atlas, mirror)) {
    report.error("SINCRONIA", "datos-atlas.js no es un espejo exacto de datos-atlas.json.");
  } else if (mirror) {
    report.note("datos-atlas.js y datos-atlas.json están sincronizados.");
  }

  validatePlaces(atlas);
  const schema2 = strict2 || String(atlas.meta?.esquema || "").startsWith("2");
  const seenIds = new Set();
  const editorial = {
    idsNoCanonicos: [], sinFecha: [], entradasCompuestas: [],
    autoriasPendientes: [], manifestacionesConAutoria: [],
  };

  atlas.obras.forEach((work, index) => {
    if (!isObject(work)) {
      report.error("OBRA_FORMA", `obras[${index}] debe ser un objeto.`);
      return;
    }
    validateLegacyWork(work, index, atlas, seenIds, editorial);
    if (isNonEmptyString(work.id)) validateV2Work(work, schema2);
  });
  validateRelations(atlas, seenIds);
  validateCatalogTranslations(atlas, schema2);

  if (editorial.idsNoCanonicos.length) {
    report.warn("ID_FORMATO", `Identificadores fuera de minúsculas ASCII: ${listIds(editorial.idsNoCanonicos)}. No deben renombrarse sin redirección.`);
  }

  // Dos identificadores distintos para la misma obra. ID_DUPLICADO solo mira el
  // identificador, así que un duplicado real como steward/stewardpuertorico pasaba
  // sin una sola advertencia pese a estar catalogado como incidencia de severidad alta.
  const porTitulo = new Map();
  (atlas.obras || []).forEach((work) => {
    if (!isNonEmptyString(work.t) || !isNonEmptyString(work.id)) return;
    const clave = work.t
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
    if (!porTitulo.has(clave)) porTitulo.set(clave, []);
    porTitulo.get(clave).push(work.id);
  });
  const titulosRepetidos = [...porTitulo.values()].filter((ids) => ids.length > 1);
  if (titulosRepetidos.length) {
    const detalle = titulosRepetidos.map((ids) => ids.join(" = ")).join("; ");
    report.warn("TITULO_DUPLICADO", `Entradas distintas con el mismo título: ${detalle}. Exigen fusión y redirección del ancla superviviente antes de publicar.`);
  }
  if (editorial.sinFecha.length) report.warn("FECHA_PENDIENTE", `Entradas sin año: ${listIds(editorial.sinFecha)}.`);
  if (editorial.autoriasPendientes.length) report.warn("AUTORIA_PENDIENTE", `Autorías no identificadas: ${listIds(editorial.autoriasPendientes)}.`);
  if (editorial.manifestacionesConAutoria.length) {
    report.warn("TIPO_EN_REVISION", `Manifestaciones con autoría personal identificada: ${listIds(editorial.manifestacionesConAutoria)}.`);
  }
  if (editorial.entradasCompuestas.length) {
    report.warn("ENTRADA_COMPUESTA", `Títulos con separador " / " que requieren decisión editorial: ${listIds(editorial.entradasCompuestas)}.`);
  }
  report.note(`${atlas.obras.length} entradas; ${atlas.relaciones.length} relaciones; ${Object.keys(atlas.lugares).length} lugares.`);
  report.note(`${unique(atlas.obras.map((work) => work.tr)).length} valores distintos en el campo heredado tr.`);
  if (!schema2) report.note("Corpus 1.x: los campos 2.0 se validan si aparecen, pero todavía no son obligatorios.");
}

for (const message of report.info) console.log(`[INFO] ${message}`);
for (const item of report.warnings) console.log(`[ADVERTENCIA ${item.code}] ${item.message}`);
for (const item of report.errors) console.log(`[ERROR ${item.code}] ${item.message}`);

console.log(`\nResultado: ${report.errors.length} error(es), ${report.warnings.length} advertencia(s).`);
process.exitCode = report.errors.length ? 1 : 0;
