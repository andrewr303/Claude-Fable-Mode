#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outDir = path.join(root, 'dist');
const zipName = 'fable-mode-repo.zip';
fs.mkdirSync(outDir, { recursive: true });
const zipPath = path.join(outDir, zipName);
if (fs.existsSync(zipPath)) fs.rmSync(zipPath);

const include = [
  'AGENTS.md',
  'CLAUDE.md',
  'README.md',
  'LICENSE',
  'CHANGELOG.md',
  'CONTRIBUTING.md',
  'SECURITY.md',
  'package.json',
  '.gitignore',
  '.github',
  'bin',
  'docs',
  'templates',
  'claude',
  'codex-plugin'
];

execFileSync('zip', ['-qr', zipPath, ...include], { cwd: root, stdio: 'inherit' });
console.log(zipPath);
