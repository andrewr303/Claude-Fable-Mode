# Fable Mode for Codex

A Codex plugin/skill package that adds Fable Mode operating discipline to complex coding and artifact tasks.

## Install

From this folder:

```bash
node install-local.mjs --target /path/to/your/repo
```

Or copy the `skills/fable-mode` folder into your Codex skill/plugin location and copy `AGENTS.fable-mode-snippet.md` into your repo instructions.

## Use

Ask Codex:

```text
Use fable-mode for this task. Inspect first, create a stage map, verify with checks that can fail, and hand off with proof.
```

## What it changes

This plugin changes process, not model capability. It encourages codebase archaeology, stage maps, contract-based subagents, proof matrices, rendered-output inspection, AI/RAG/tool safety, and honest final handoffs.
