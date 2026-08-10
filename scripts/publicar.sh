#!/usr/bin/env bash
#
# Puerta única de publicación del sitio.
#
# Corre todas las comprobaciones y solo entonces commitea y empuja. Si algo
# falla, se detiene sin tocar el repositorio: más vale no publicar que publicar
# una cifra que el corpus contradice.
#
# Uso desde la raíz del repositorio:
#   bash scripts/publicar.sh "mensaje del commit"
#   bash scripts/publicar.sh --solo-revisar     (comprueba y no publica)
#
set -euo pipefail
cd "$(dirname "$0")/.."

SOLO_REVISAR=false
MENSAJE=""
for arg in "$@"; do
  if [ "$arg" = "--solo-revisar" ]; then SOLO_REVISAR=true; else MENSAJE="$arg"; fi
done

falla() { printf '\n\033[31m✗ %s\033[0m\n' "$1"; exit 1; }
paso()  { printf '\033[32m✓\033[0m %s\n' "$1"; }

printf '\n── Comprobaciones ──────────────────────────────\n'

# Un candado huérfano de una sesión anterior bloquearía el commit al final.
# Se retira aquí, antes de empezar, y no en mitad del proceso.
if [ -f .git/index.lock ] && ! pgrep -x git >/dev/null 2>&1; then
  rm -f .git/index.lock && paso "Retirado un candado huérfano de git"
fi

python3 data/agua-de-por-medio/sincronizar.py --check >/tmp/pc-sync.txt 2>&1 \
  || falla "datos-atlas.js y datos-atlas.json no están en sincronía. Corre sincronizar.py sin --check."
paso "$(cat /tmp/pc-sync.txt)"

node scripts/validar-atlas.mjs >/tmp/pc-corpus.txt 2>&1 \
  || { cat /tmp/pc-corpus.txt; falla "El validador del corpus encontró errores."; }
paso "Corpus: $(tail -1 /tmp/pc-corpus.txt)"

node scripts/verificar-cifras-sitio.mjs >/tmp/pc-cifras.txt 2>&1 \
  || { grep -E "DESFASE|NO_ENCONTRADO" /tmp/pc-cifras.txt; falla "Alguna cifra publicada contradice al corpus."; }
paso "Cifras del sitio: $(tail -1 /tmp/pc-cifras.txt)"

if [ -f scripts/validar-fenomenos.mjs ]; then
  node scripts/validar-fenomenos.mjs >/tmp/pc-fen.txt 2>&1 \
    || { cat /tmp/pc-fen.txt; falla "La capa de fenómenos tiene errores."; }
  paso "Fenómenos: $(tail -1 /tmp/pc-fen.txt)"
fi

INSTANTANEA=data/agua-de-por-medio/instantaneas/datos-atlas-1.15.0.json
if [ -f "$INSTANTANEA" ]; then
  for lote in piloto lotes/s01 lotes/a01 lotes/a02; do
    base=$(basename "$lote")
    node scripts/validar-piloto-atlas-2.mjs "$INSTANTANEA" \
      "data/agua-de-por-medio/atlas-2/${lote}-generado.json" \
      data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json \
      "data/agua-de-por-medio/atlas-2/${lote}-config.json" >/tmp/pc-$base.txt 2>&1 \
      || { cat /tmp/pc-$base.txt; falla "La capa cerrada $base ya no valida."; }
  done
  paso "Capas cerradas P00, S01, A01 y A02: 0 errores"
fi

if [ "$SOLO_REVISAR" = true ]; then
  printf '\n\033[32mTodo en orden. No se publicó nada (--solo-revisar).\033[0m\n\n'
  git --no-optional-locks status --short
  exit 0
fi

[ -n "$MENSAJE" ] || falla "Falta el mensaje del commit. Uso: bash scripts/publicar.sh \"mensaje\""

if [ -z "$(git --no-optional-locks status --porcelain)" ]; then
  printf '\n\033[32mTodo en orden y no hay nada nuevo que publicar.\033[0m\n\n'
  exit 0
fi

printf '\n── Publicación ─────────────────────────────────\n'
git --no-optional-locks status --short
printf '\n'
git add -A
git commit -m "$MENSAJE"
git push origin "$(git --no-optional-locks rev-parse --abbrev-ref HEAD)"
printf '\n\033[32m✓ Publicado.\033[0m\n\n'
