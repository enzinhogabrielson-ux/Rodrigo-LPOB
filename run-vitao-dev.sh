#!/bin/bash
set -e
cd artifacts/vitao-ib
export PORT=${PORT:-23110}
export BASE_PATH=${BASE_PATH:-/}
pnpm run dev
