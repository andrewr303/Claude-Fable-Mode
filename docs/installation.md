# Installation

## Drop-in files

Copy these files into your repository root:

```bash
cp templates/drop-in/AGENTS.md /path/to/your/repo/AGENTS.md
cp templates/drop-in/CLAUDE.md /path/to/your/repo/CLAUDE.md
```

Then fill out the customization slot at the end of each file with your project identity, stack commands, source-of-truth map, risk boundaries, and vocabulary.

## Claude Code assets

From the `claude` folder:

```bash
node bin/install.mjs --target /path/to/your/repo
```

This installs agents, a command, and the skill folder into the target repository.

## Codex plugin

From the `codex-plugin` folder:

```bash
node install-local.mjs --target /path/to/your/repo
```

This installs the plugin under `.codex/plugins/fable-mode-codex` and copies a snippet you can merge into repo instructions.

## Manual install

You can also manually copy:

- `claude/agents/*.md` to `.claude/agents/`
- `claude/commands/fable-mode.md` to `.claude/commands/`
- `claude/skills/fable-mode/` to `skills/fable-mode/`
- `codex-plugin/skills/fable-mode/` into your Codex skill location
