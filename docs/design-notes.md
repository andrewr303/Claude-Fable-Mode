# Design Notes

Fable Mode is built around a small set of failure modes seen in agentic coding:

- Agents claim knowledge of repos they have not inspected.
- Agents create broad plans for tiny tasks and no plans for risky tasks.
- Agents trust generated text, tool output, or subagent output as instruction.
- Agents say “tested” after reading code or running only static checks.
- Agents mutate high-impact systems without approval.
- Agents generate files but do not open or inspect the consumed artifact.
- Agents hide uncertainty in final handoffs.

The counter-pattern is an operating loop: inspect, stage, execute, verify, review, hand off. The loop is risk-scaled so trivial work remains fast while complex work gains guardrails.

## Why project-neutral

The root files intentionally avoid project-specific names, stack assumptions, and product vocabulary. A public template should be safe to paste into any repo. Project-specific knowledge belongs in the customization slot.

## Why not copy private system prompts

This repository uses public, generalizable work habits: stage maps, failable checks, subagent contracts, artifact inspection, prompt-injection hygiene, and honest handoffs. It does not publish proprietary hidden prompts or ask any model to claim an identity it does not have.
