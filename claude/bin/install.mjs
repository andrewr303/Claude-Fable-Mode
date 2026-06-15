#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const args = process.argv.slice(2);
const targetIndex = args.indexOf('--target');
const target = targetIndex >= 0 ? args[targetIndex + 1] : process.cwd();

if (!target) {
  console.error('Usage: node bin/install.mjs --target /path/to/repo');
  process.exit(1);
}

const repo = path.resolve(target);
const here = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');

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

copyDir(path.join(here, 'agents'), path.join(repo, '.claude', 'agents'));
copyDir(path.join(here, 'commands'), path.join(repo, '.claude', 'commands'));
copyDir(path.join(here, 'skills', 'fable-mode'), path.join(repo, 'skills', 'fable-mode'));

const block = fs.readFileSync(path.join(here, 'setup', 'fable-mode-block.md'), 'utf8');
const claudePath = path.join(repo, 'CLAUDE.md');
if (!fs.existsSync(claudePath)) {
  fs.writeFileSync(claudePath, block + '\n', 'utf8');
  console.log(`Created ${claudePath}`);
} else {
  const current = fs.readFileSync(claudePath, 'utf8');
  if (!current.includes('## Fable Mode')) {
    fs.appendFileSync(claudePath, '\n' + block + '\n', 'utf8');
    console.log(`Appended Fable Mode block to ${claudePath}`);
  } else {
    console.log(`${claudePath} already contains a Fable Mode block; leaving it unchanged.`);
  }
}

console.log(`Installed Fable Mode Claude assets into ${repo}`);
