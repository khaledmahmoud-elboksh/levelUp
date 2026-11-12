# Answers: Resolve page access from permissions

1. A repaired tab is an extra commit that only fixes the case at hand; a derived tab covers a permission change while the tab is open too, because the hook re-renders on the permission store and the resolver maps the hidden requested tab to a visible one. The state keeps the raw request ("a hidden tab is not repaired in state").

2. When neither the file list nor the audit log is granted. Download shows controls, but there is no list to act on, so the route denies instead of showing an empty shell.

3. Every future caller that forgets the argument silently grants all actions. Failing closed means the argument is required and each caller states what it grants, which is also what the tests assert per item.
