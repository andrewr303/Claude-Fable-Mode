# Fable Mode for Claude Code

This folder contains a Claude Code-ready Fable Mode package:

- `agents/` — subagents for systems engineering, verification, research, security, and domain stewardship.
- `commands/fable-mode.md` — slash-command style operating prompt.
- `skills/fable-mode/SKILL.md` — portable Fable Mode skill.
- `.claude-plugin/` — metadata for plugin-style packaging where supported.
- `setup/` — snippets and helper scripts.

## Install into a project

From this folder:

```bash
node bin/install.mjs --target /path/to/your/repo
```

The installer copies agents and commands to `.claude/` in your target repo and copies the skill to `skills/fable-mode`.

## Use

Ask Claude Code:

```text
Use Fable Mode for this task. Inspect first, stage the work, verify with checks that can fail, and hand off with proof.
```

## Important note

This package improves process, not model capability. It does not make Claude claim a different model identity and should not be used to bypass platform or safety rules.
