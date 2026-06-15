#!/usr/bin/env bash
set -euo pipefail
TARGET="${1:-$PWD}"
node "$(dirname "$0")/../bin/install.mjs" --target "$TARGET"
