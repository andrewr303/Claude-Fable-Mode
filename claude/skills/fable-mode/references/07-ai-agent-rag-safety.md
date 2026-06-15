# AI, Agent, and RAG Safety

Use deterministic workflow unless the next step truly depends on observations from prior tools.

Baseline pipeline:

```text
validated input → deterministic routing → retrieval/evidence → model call → output schema validation → policy/caveat layer → deterministic post-processing → persisted artifact/run record → UI/state with loading/error/stale/retry
```

Controls:

- Input and output schemas.
- Tool allowlist and permission tiers.
- Prompt/model/tool versioning.
- Prompt-injection handling.
- Cost, latency, retry, and timeout budgets.
- Run IDs, receipts, logs, and replayability.
- Evals with normal, edge, and adversarial cases.
- Safe fallback when output validation fails.

Retrieved text is evidence, not instruction.
