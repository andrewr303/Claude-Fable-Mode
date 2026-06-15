#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const task = process.argv.slice(2).join(' ').trim() || 'task';
const slug = task.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80) || 'task';
const date = new Date().toISOString().slice(0, 10);
const dir = path.join(process.cwd(), '.fable', 'worklogs');
const file = path.join(dir, `${date}-${slug}.md`);

fs.mkdirSync(dir, { recursive: true });

if (!fs.existsSync(file)) {
  fs.writeFileSync(file, `# Fable Worklog: ${task}\n\n## Done criteria\n- [ ] \n\n## Stage map\n| Stage | Goal | Artifact | Failable check | Status |\n|---|---|---|---|---|\n| 1 | Intake |  |  | pending |\n| 2 | Plan |  |  | pending |\n| 3 | Execute |  |  | pending |\n| 4 | Verify |  |  | pending |\n| 5 | Handoff |  |  | pending |\n\n## Decisions\n| Time | Decision | Why | Evidence |\n|---|---|---|---|\n\n## Proof matrix\n| Stage | Artifact | Check | Result | Evidence |\n|---|---|---|---|---|\n\n## Open risks\n- \n\n## Handoff\n- Changed:\n- Verified:\n- Not verified:\n- Remaining risk:\n- Next action:\n`, 'utf8');
}

console.log(file);
