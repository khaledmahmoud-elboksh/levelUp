# Answers: GeneralGridV2 plus a page-local query hook

1. Root still stores the filter state, but the request body does not, so the rows never change.

2. Each remote is its own repo and its own build. The component is duplicated on purpose today.

3. The generic grid must not import the claims program context. The page hook closes over the extra argument.
