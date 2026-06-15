<a id="readme-top"></a>

# Fable Mode

A ready-to-drop operating standard for coding agents: `AGENTS.md`, `CLAUDE.md`, Claude Code agents/skill assets, and a Codex plugin package.

Fable Mode is for the moments when “just generate code” is not good enough. It gives agentic coding tools a repeatable workflow for complex tasks: inspect the real system, stage the work, delegate independent pieces with contracts, verify with checks that can fail, inspect rendered/generated artifacts, and hand off with proof.

This repository is project-neutral. There are no product-specific assumptions baked into the drop-in files. Add your own stack, commands, product vocabulary, and approval gates in the included customization slots.

## What is included

| Path | Purpose |
|---|---|
| `AGENTS.md` | Generic repo-level operating standard for Codex, Cursor, OpenAI agents, Claude Code, and other coding agents. |
| `CLAUDE.md` | Claude Code-specific operating guide with tool discipline, Task/subagent rules, skill-first artifact handling, and final handoff templates. |
| `templates/drop-in/` | Clean copies of `AGENTS.md` and `CLAUDE.md` for copy/paste installation. |
| `claude/agents/` | Claude Code subagents for implementation, verification, research, security review, and domain stewardship. |
| `claude/skills/fable-mode/` | Portable Claude-style skill folder with `SKILL.md` and reference notes. |
| `claude/commands/fable-mode.md` | Slash-command style Fable Mode instructions. |
| `codex-plugin/` | Codex plugin package with plugin metadata, skill files, references, and installer. |
| `docs/` | Installation, customization, verification, and design notes. |
| `bin/` | Repository validation and packaging helpers. |

## Why use it

Coding agents fail in predictable ways. They guess paths, skip reading nearby tests, treat generated text as truth, call typecheck “end-to-end,” forget negative paths, trust subagents too much, and overclaim at handoff. Fable Mode exists to kill those failure modes.

The operating standard emphasizes:

- Read-before-claim codebase archaeology.
- Risk-scaled planning instead of ceremony everywhere.
- Stage maps with checkable artifacts.
- Subagent delegation only when work is independent.
- Failable verification, proof matrices, and exact verification language.
- Render/open inspection for generated human-facing artifacts.
- Prompt-injection hygiene for retrieved files, web pages, logs, emails, PDFs, screenshots, and agent outputs.
- Approval gates for irreversible, outward-facing, production, auth, money, legal/compliance, or data-loss actions.
- Project customization slots so every repo can define its own source-of-truth map.

## Quick start

Copy the two root instruction files into your project:

```bash
cp templates/drop-in/AGENTS.md /path/to/your/repo/AGENTS.md
cp templates/drop-in/CLAUDE.md /path/to/your/repo/CLAUDE.md
```

Then customize the final section in each file:

```md
### Project identity
- Product/project name:
- What it does:
- Primary users:

### Stack and commands
- Package manager:
- Dev server:
- Typecheck:
- Lint:
- Unit tests:
- E2E tests:
- Build:
- Deploy/dry-run:

### Source-of-truth map
- Routes:
- API handlers:
- Database/schema:
- Jobs/queues:
- AI/prompts/tools:
- Docs/wiki:
```

Ask your agent:

```text
Use Fable Mode for this task. Inspect the real system before editing, create a concise stage map, verify with checks that can fail, and hand off with verified vs not verified separated.
```

## Claude Code install

Install the Claude assets into a target repository:

```bash
cd claude
node bin/install.mjs --target /path/to/your/repo
```

This copies:

- `claude/agents/*.md` → `/path/to/your/repo/.claude/agents/`
- `claude/commands/fable-mode.md` → `/path/to/your/repo/.claude/commands/`
- `claude/skills/fable-mode/` → `/path/to/your/repo/skills/fable-mode/`
- A small Fable Mode block into `CLAUDE.md` if one does not already exist.

Claude Code usage:

```text
Use the fable-systems-engineer agent for this implementation, then use fable-verifier before final handoff.
```

Or:

```text
/fable-mode Audit this feature for root-cause bugs, prompt-injection risk, and missing verification.
```

## Codex plugin install

Install the Codex plugin into a target repository:

```bash
cd codex-plugin
node install-local.mjs --target /path/to/your/repo
```

This copies the plugin to:

```text
/path/to/your/repo/.codex/plugins/fable-mode-codex
```

Codex usage:

```text
Use fable-mode hard mode for this repo change. Inspect first, keep a proof matrix, and disclose any not-run checks.
```

## Fable Mode in one screen

```text
Map before touching.
Diagnose from real artifacts.
Decompose only where it creates leverage.
Delegate with a return schema and anti-fabrication rule.
Verify with checks that can fail.
Inspect rendered/generated outputs before declaring them done.
Confirm before irreversible, outward-facing, production, money, auth, data-loss, or legal actions.
Separate proven facts from assumptions.
Leave the repo easier to resume.
```

## Example final handoff

```md
Implemented: Added validation to the import endpoint and surfaced structured errors in the UI.

Changed files:
- src/api/import.ts — added Zod boundary validation and typed error response
- src/components/ImportPanel.tsx — rendered validation messages and disabled submit while pending

Verification:
- npm run typecheck — pass — no TS errors
- npm run test -- import — pass — 8 focused tests passed
- Manual UI check at 375px and 1280px — pass — validation errors render without overflow

Not verified:
- Full production import with provider credentials — blocked; credentials are not available locally

Remaining risk:
- Large CSV performance should be profiled with a production-like file

Next action:
- Run staging import against a large fixture before release
```

## Repository layout

```text
.
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── bin/
│   ├── make-release-zip.mjs
│   └── validate-repo.mjs
├── claude/
│   ├── agents/
│   ├── commands/
│   ├── skills/fable-mode/
│   └── README.md
├── codex-plugin/
│   ├── .codex-plugin/plugin.json
│   ├── skills/fable-mode/
│   └── README.md
├── docs/
│   ├── index.md
│   ├── installation.md
│   ├── customization.md
│   ├── verification.md
│   ├── design-notes.md
│   ├── distillation-notes.md
│   └── source-inventory.md
└── templates/
    ├── claude-code/
    └── drop-in/
```

## Validation

Run:

```bash
npm run validate
```

The validation script checks that required files exist, JSON metadata parses, Markdown files do not contain unfinished placeholders, and no project-specific banned terms are present.

Create a release zip:

```bash
npm run pack:zip
```

## What this is not

Fable Mode is not a model jailbreak, hidden prompt, proprietary model clone, or guarantee of correctness. It is a public, model-agnostic operating discipline. It improves process, not raw model capability. Agents still need appropriate human review for high-impact work.

## Publishing this repository

1. Create a new GitHub repository.
2. Copy this folder into it.
3. Run `npm run validate`.
4. Commit and push.
5. In GitHub settings, enable Pages from `main` and `/docs` if you want `docs/index.md` as a simple project page.
6. Create a release using the zip produced by `npm run pack:zip`.

## Contributing

Issues and pull requests are welcome. The bar for changes is evidence: show the failure mode, propose the smallest improvement, and include a check that proves it works.

## License

MIT. See `LICENSE`.
