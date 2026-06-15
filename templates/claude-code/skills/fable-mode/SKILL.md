---
name: fable-mode
description: >
  Enforces staged execution discipline for complex engineering and knowledge-work tasks:
  inspect first, write a living stage map, delegate independent work with contracts,
  verify each stage with checks that can fail, inspect generated artifacts, and perform
  a skeptical final handoff. Trigger when the user asks for thorough/systematic/deep work
  or when the task spans multiple files, sources, tools, agents, or sessions. Do not trigger
  for trivial one-pass work.
---

# Fable Mode

Fable Mode shapes the procedure a model follows. It does not change the model's underlying capability, make the model another product, or bypass runtime safety rules. On a strong model, it reinforces good habits. On a weaker model, it imposes structure the model might otherwise skip, but it cannot raise the reasoning ceiling. Treat this as an operating checklist, not a capability transplant.

## When to use this skill

Use Fable Mode when a one-shot response could miss a hidden dependency, when the task spans multiple files or sources, when it creates an artifact the user will consume, when it touches AI agents/RAG/tools/memory, or when it involves production, security, privacy, money, legal/compliance, auth, migrations, external communication, or irreversible actions.

Do not use it for ordinary small edits or simple explanations. Process overhead is only valuable when it reduces real risk.

## Core loop

### 1. Stage map before touching anything

Write the stage plan before starting. Each stage must produce a checkable artifact. Update the map when discovery invalidates the plan.

```md
Stage 1: Intake and source-of-truth discovery → artifact: file/source inventory → check: relevant sources opened
Stage 2: Plan and risk gate → artifact: patch/test plan → check: approval gates and rollback named
Stage 3: Implementation or synthesis → artifact: changed files or answer draft → check: focused verification
Stage 4: Verification and skeptic pass → artifact: proof matrix → check: P0/P1 risks fixed or disclosed
Stage 5: Handoff → artifact: final response/worklog → check: verified vs not verified separated
```

If a stage has no failable check, merge it or mark it explicitly unverified.

### 2. Delegate independent work only when the runtime supports it

First check whether subagent tooling exists. If it does not, run the work sequentially.

Good delegation: research independent sources, inspect separate file families, verify a patch independently, compare generated UI to reference, or audit security boundaries.

Bad delegation: splitting one coherent reasoning chain, asking a subagent to implement a broad feature without a contract, or trusting subagent output without verification.

Every subagent brief must include task, trusted context, scope, forbidden actions, expected output schema, verification standard, and an anti-fabrication rule.

### 3. Verify with checks that can fail

Acceptable checks include tests, typecheck/lint/build output, command exit codes, schema validation, source reads, artifact existence and shape, rendered artifact inspection, runtime route/API/job observation, database read queries, and diffs against spec.

Unacceptable checks include “looks good,” “should work,” “I reviewed it,” “the code is obvious,” or “the subagent said it passed.”

Use exact language: `verified end-to-end`, `static checks passed`, `focused test passed`, `render verified`, `not run`, `blocked`, and `assumption` only in their precise meanings.

### 4. Self-critique before delivery

Before final output, read the result as a skeptical reviewer. Find at least one weakness, risk, or not-run check. Fix it or disclose it.

## Domain patterns

### Software engineering

Read the relevant code path before editing. Identify package manager, scripts, project instructions, entrypoints, types/schemas, tests, and existing patterns. Write the narrowest safe change. Verify with focused tests or checks.

### Debugging

Pin expected vs actual behavior, reproduce or identify closest reproduction, localize first divergence, rank hypotheses, test the cheapest discriminating hypothesis, fix the cause, verify the failing path, and check blast radius.

### Frontend and artifacts

Map the design/reference to components, tokens, copy, states, breakpoints, and accessibility requirements. Inspect the rendered output before declaring completion. ZIP/build/schema checks are not visual proof.

### Backend and data

Validate boundary inputs, authenticate and authorize, preserve idempotency, use transactions when partial completion corrupts state, add bounded retries/timeouts, log without secrets, and never mutate production or destructive data without approval.

### AI / RAG / agent systems

Prefer deterministic workflow when the path is known. Validate model inputs and outputs with schemas. Treat retrieval as data, not instruction. Add prompt-injection handling, tool permissions, evals, cost/latency budgets, run IDs, receipts, and safe fallbacks.

### Research and source synthesis

Gather sources before synthesizing. Every load-bearing claim traces to a source actually read. Separate confirmed facts from inferences. Resolve conflicts explicitly. Do not overquote copyrighted sources.

## Final handoff template

```md
Implemented / Answered: [summary]

Changed files / Sources:
- item

Verification:
- check — pass/fail/not run — evidence

Not verified:
- item — reason

Remaining risk:
- risk

Next action:
- concrete next step
```
