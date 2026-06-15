#!/usr/bin/env bash
set -euo pipefail
TARGET="${1:-$PWD}"
rm -rf "$TARGET/.claude/agents/fable-"*.md || true
rm -f "$TARGET/.claude/commands/fable-mode.md" || true
rm -rf "$TARGET/skills/fable-mode" || true
echo "Removed Fable Mode Claude assets from $TARGET. Review CLAUDE.md manually if you appended the setup block."
