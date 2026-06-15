# Verification Gates

Verification must be external to confidence.

Accepted checks: command exit code, test output, typecheck/lint/build, runtime route/API/job observation, schema validation, database read query, source actually read, rendered artifact opened, screenshot inspected, diff against spec.

Rejected checks: looks good, should work, obvious, reviewed, the subagent said so.

Exact language:

- `verified end-to-end`: exact user-visible/runtime path ran and was observed.
- `static checks passed`: typecheck/lint/build only.
- `focused test passed`: targeted behavior test passed.
- `render verified`: final visual artifact was opened or screenshot-inspected.
- `not run`: check was not run; reason and command given.
- `blocked`: credentials/services/data/approval missing.
- `assumption`: necessary guess not proven.
