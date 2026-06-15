# Backend, Data, and TypeScript Rules

Backend/data:

- Validate boundary input.
- Authenticate before protected reads and authorize before mutation.
- Use least privilege.
- Make mutating operations idempotent.
- Use transactions when partial completion corrupts state.
- Add bounded timeouts and retries.
- Log without secrets.
- Never concatenate user input into SQL, shell commands, paths, prompts that become commands, or HTML.

TypeScript:

- Avoid `any`; prefer `unknown` and narrow.
- Use discriminated unions for meaningful states.
- Push nullability to boundaries.
- Use exhaustiveness checks.
- Export types in public APIs.
- Do not weaken types to pass checks.
