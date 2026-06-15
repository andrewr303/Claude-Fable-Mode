#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const args = process.argv.slice(2);
const targetIndex = args.indexOf('--target');
const target = targetIndex >= 0 ? args[targetIndex + 1] : process.cwd();

if (!target) {
  console.error('Usage: node install-local.mjs --target /path/to/repo');
  process.exit(1);
}

const repo = path.resolve(target);
const here = path.dirname(new URL(import.meta.url).pathname);
const pluginDest = path.join(repo, '.codex', 'plugins', 'fable-mode-codex');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

if (!fs.existsSync(repo) || !fs.statSync(repo).isDirectory()) {
  console.error(`Target is not a directory: ${repo}`);
  process.exit(1);
}

copyDir(here, pluginDest);

const snippetSrc = path.join(here, 'AGENTS.fable-mode-snippet.md');
const snippetDest = path.join(repo, 'AGENTS.fable-mode-snippet.md');
if (fs.existsSync(snippetSrc)) fs.copyFileSync(snippetSrc, snippetDest);

console.log(`Installed Fable Mode Codex plugin to ${pluginDest}`);
console.log(`Copied AGENTS.fable-mode-snippet.md to ${snippetDest}`);
console.log('Next: copy or merge the root AGENTS.md from this repository into your project root.');
