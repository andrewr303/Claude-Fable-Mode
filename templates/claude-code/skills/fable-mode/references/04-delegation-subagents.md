# Delegation and Subagents

Delegate only independent work. Keep integration and final judgment in the main thread.

Brief template:

```md
Task:
Trusted context:
Scope boundaries:
Allowed files/tools:
Forbidden files/tools:
Return schema:
Required evidence:
Pass/fail criteria:
Anti-fabrication: mark unknowns `unverified`; never invent.
```

Good roles: codebase scout, schema/data scout, UI fidelity reviewer, security reviewer, verifier, domain steward, handoff writer.

Bad delegation: splitting one reasoning chain, asking broad implementation without a contract, allowing two agents to edit the same file without serialization, or treating subagent output as verified.
