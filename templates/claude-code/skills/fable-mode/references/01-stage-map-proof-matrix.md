# Stage Map and Proof Matrix

A stage map keeps complex work from becoming a pile of guesses. Each stage needs an artifact and a failable check.

```md
Stage 1: Intake → artifact: file/source inventory → check: opened relevant sources
Stage 2: Plan → artifact: patch/test plan → check: affected surfaces and approval gates named
Stage 3: Execute → artifact: changed files or synthesis → check: focused tests or source checks
Stage 4: Verify → artifact: proof matrix → check: command/artifact evidence recorded
Stage 5: Handoff → artifact: final response → check: verified vs not verified separated
```

Proof matrix:

```md
| Stage | Artifact | Check | Result | Evidence |
|---|---|---|---|---|
| 1 | source inventory | read/search | pass | files opened |
| 2 | plan | risk gate | pass | approval/rollback listed |
| 3 | patch | focused check | pass/fail/not run | command output |
| 4 | artifact/runtime | render/e2e/manual | pass/fail/not run | observation |
| 5 | skeptic pass | P0/P1 scan | pass | fixed/disclosed |
```
