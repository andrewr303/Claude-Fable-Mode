#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const required = [
  'README.md',
  'AGENTS.md',
  'CLAUDE.md',
  'LICENSE',
  'docs/index.md',
  'docs/installation.md',
  'docs/customization.md',
  'docs/verification.md',
  'docs/design-notes.md',
  'templates/drop-in/AGENTS.md',
  'templates/drop-in/CLAUDE.md',
  'claude/README.md',
  'claude/agents/fable-systems-engineer.md',
  'claude/agents/fable-verifier.md',
  'claude/agents/fable-researcher.md',
  'claude/agents/fable-security-reviewer.md',
  'claude/agents/fable-domain-steward.md',
  'claude/commands/fable-mode.md',
  'claude/skills/fable-mode/SKILL.md',
  'claude/.claude-plugin/plugin.json',
  'codex-plugin/README.md',
  'codex-plugin/.codex-plugin/plugin.json',
  'codex-plugin/skills/fable-mode/SKILL.md',
  'codex-plugin/skills/fable-mode/kickoff-prompt.txt'
];

const bannedTerms = [
  ['Hype', 'Stake'].join(''),
  ['Influence', 'Match'].join(''),
  ['Creator', 'Genome'].join(' '),
  ['Shadow', 'Cap', 'Table'].join(' '),
  ['Deal', 'Proposal'].join(' '),
  ['Brand', 'Hub'].join(' '),
  ['Creator', 'Hub'].join(' '),
  ['hype', 'stake'].join('')
];

const banned = [
  ...bannedTerms.map((term) => new RegExp(term, 'i')),
  new RegExp('TO' + 'DO:|FIX' + 'ME:|' + '\\[' + 'ins' + 'ert|<' + 'ins' + 'ert|your-' + 'logo|' + 'screen' + 'shot' + '\\.png', 'i')
];

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.git') continue;
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

let ok = true;

for (const rel of required) {
  const abs = path.join(root, rel);
  if (!fs.existsSync(abs) || !fs.statSync(abs).isFile() || fs.statSync(abs).size === 0) {
    console.error(`Missing or empty required file: ${rel}`);
    ok = false;
  }
}

for (const rel of ['package.json', 'claude/.claude-plugin/plugin.json', 'codex-plugin/.codex-plugin/plugin.json']) {
  try {
    JSON.parse(fs.readFileSync(path.join(root, rel), 'utf8'));
  } catch (err) {
    console.error(`Invalid JSON: ${rel}: ${err.message}`);
    ok = false;
  }
}

for (const file of walk(root)) {
  const rel = path.relative(root, file);
  if (!/\.(md|json|txt|mjs|sh|yml|yaml|gitignore)$/.test(rel) && path.basename(rel) !== 'LICENSE') continue;
  const text = fs.readFileSync(file, 'utf8');
  for (const pattern of banned) {
    if (pattern.test(text)) {
      console.error(`Banned or unfinished marker ${pattern} found in ${rel}`);
      ok = false;
    }
  }
}

if (!ok) process.exit(1);
console.log('Fable Mode repository validation passed.');
