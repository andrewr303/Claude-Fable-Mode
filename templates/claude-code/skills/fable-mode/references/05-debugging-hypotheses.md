# Debugging Hypotheses

Debugging order:

1. Expected vs actual behavior.
2. Exact error, input, environment, recent changes.
3. Reproduction or closest available reproduction.
4. First divergence in state.
5. Ranked hypotheses by likelihood and test cost.
6. Cheapest discriminating check first.
7. Fix cause at source layer.
8. Verify original failing case.
9. Check blast radius.

Do not patch symptoms until you know whether they are valid boundary states or upstream contract violations.
