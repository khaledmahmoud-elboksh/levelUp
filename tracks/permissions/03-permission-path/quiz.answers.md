# Answers: Walk a permission tree

1. The user is not accessAll, a path was requested, and the permissions array is empty. A missing node inside a non-empty tree returns false.

2. children, then components, then features.

3. The tree walk. The function returns true immediately.
