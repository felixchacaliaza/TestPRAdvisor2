#!/bin/bash
# Script para automatizar build y actualización del presenter en TestPRAdvisor2

set -e

# Cambia estos paths si tu estructura es diferente
CORE_DIR="../pull-request-split-advisor-bcp-core"
PRESENTER_DIR="../pull-request-split-advisor-bcp-presenter"
CLI_DIR="../pull-request-split-advisor-bcp-cli"
TEST_PR_ADVISOR_DIR="$(pwd)"

# 1. Build del presenter
cd "$PRESENTER_DIR"
echo "Construyendo presenter en $PRESENTER_DIR..."
npm run build

# 2. Volver a TestPRAdvisor2 y reinstalar dependencias locales
cd "$TEST_PR_ADVISOR_DIR"
echo "Instalando dependencias locales en $TEST_PR_ADVISOR_DIR..."
npm install

# 3. Ejecutar el CLI
echo "Ejecutando CLI..."
npx pr-split-advisor-bcp
echo "Listo: presenter actualizado, dependencias instaladas y CLI ejecutado."

# Script para automatizar build y actualización de core, presenter y CLI en TestPRAdvisor2

set -e

# Paths relativos (ajusta si tu estructura es diferente)

# 1. Build del core
if [ -d "$CORE_DIR" ]; then
	echo "Construyendo core en $CORE_DIR..."
	cd "$CORE_DIR"
	npm run build
fi

# 2. Build del presenter (si existe)
if [ -d "$PRESENTER_DIR" ]; then
	echo "Construyendo presenter en $PRESENTER_DIR..."
	cd "$PRESENTER_DIR"
	npm run build
fi

# 3. Copiar artefactos core y presenter al CLI (ajusta los paths de destino si es necesario)
cd "$CLI_DIR"
echo "Copiando artefactos de core y presenter al CLI..."
cp -r "$CORE_DIR/dist/." ./dist/core/
if [ -d "$PRESENTER_DIR/dist" ]; then
	cp -r "$PRESENTER_DIR/dist/." ./dist/presenter/
fi

# 4. Build del CLI
echo "Construyendo CLI en $CLI_DIR..."
npm run build

# 5. Volver a TestPRAdvisor2 e instalar CLI local
cd "$TEST_PR_ADVISOR_DIR"
echo "Instalando CLI local en $TEST_PR_ADVISOR_DIR..."
npm install

# 6. Ejecutar el CLI
echo "Ejecutando CLI..."
npx pr-split-advisor-bcp

echo "Listo: core, presenter y CLI actualizados, dependencias instaladas y CLI ejecutado."
