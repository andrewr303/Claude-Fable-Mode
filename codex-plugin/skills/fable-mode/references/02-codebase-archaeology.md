# Codebase Archaeology

Read outside-in before editing.

1. Identify package manager, runtime, scripts, and lockfiles.
2. Read local instructions and docs.
3. Locate entrypoints: route, component, handler, job, function, CLI command, package.
4. Trace one real execution path from input to effect and back.
5. Read nearby tests, schemas, fixtures, generated types, migrations, and stories.
6. Identify invariants: permissions, side effects, caching, retries, idempotency, concurrency, observability.
7. Treat surprising code as evidence your model is incomplete before deleting it.

Prefer targeted search to random reading. Stop once you can explain the path you are changing and how you will verify it.
