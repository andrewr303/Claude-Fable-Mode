# Verification Standard

Fable Mode uses checks that can fail. Confidence is not proof.

## Accepted checks

- Command with exit code.
- Test output.
- Typecheck, lint, build, unit, integration, or E2E result.
- Runtime route, API, job, queue, or CLI behavior observed.
- Schema validation on valid and invalid inputs.
- Database read query confirming expected persisted state.
- Source actually opened and read.
- Rendered artifact opened or screenshot-inspected.
- Diff against a stated spec.

## Rejected checks

- “Looks good.”
- “Should work.”
- “I reviewed it.”
- “The code is simple.”
- “The subagent said it passed.”
- “Typecheck passed” as proof of runtime behavior.

## Exact terms

- `verified end-to-end`: exact user-visible/runtime path ran and was observed.
- `static checks passed`: typecheck/lint/build passed only.
- `focused test passed`: targeted behavior test passed.
- `render verified`: final visual artifact was opened or screenshot-inspected.
- `not run`: check was not run; reason and command are included.
- `blocked`: missing credentials, services, data, or approval prevent the check.
- `assumption`: necessary guess not proven by current artifacts.

## Proof matrix

Use this for complex work:

```md
| Stage | Artifact | Check | Result | Evidence |
|---|---|---|---|---|
| 1 | source inventory | read/search | pass | files opened |
| 2 | plan | risk gate | pass | approval/rollback listed |
| 3 | implementation | focused check | pass/fail/not run | command output |
| 4 | runtime/artifact | render/e2e/manual | pass/fail/not run | observation |
| 5 | skeptic pass | P0/P1 scan | pass | fixed/disclosed |
```
