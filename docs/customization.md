# Customization

The drop-in files are intentionally project-neutral. After installing them, customize only the section labeled `Customization slot for your project`.

Good project customization is short and factual. It should tell agents what the repo actually is, where source truth lives, which commands are safe, and which areas require approval.

## Recommended additions

```md
### Project identity
- Product/project name:
- What it does:
- Primary users:

### Stack and commands
- Package manager:
- Dev server:
- Typecheck:
- Lint:
- Unit tests:
- E2E tests:
- Build:
- Deploy/dry-run:

### Source-of-truth map
- Routes:
- API handlers:
- Database/schema:
- Jobs/queues:
- AI/prompts/tools:
- Docs/wiki:

### Approval gates
- Production data:
- Auth/permissions:
- Billing/money:
- External communication:
- Destructive commands:

### Project vocabulary
- Canonical terms:
- Deprecated terms:
- Values never to invent:
```

## What not to add

Do not add stale route maps, unverified schema guesses, secrets, credentials, private customer data, or instructions that ask agents to bypass review. Do not encode one person's memory as source truth unless it points to a file or system of record.

## Keeping it current

Review the customization section when scripts, deployment targets, routing conventions, schemas, or approval gates change. Stale instructions are worse than missing instructions because they make agents confidently wrong.
