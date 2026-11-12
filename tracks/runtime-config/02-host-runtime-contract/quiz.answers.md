# Answers: The host runtime URL contract

1. When the host mount is ops-center, and also when either runtime URL is missing. Bulk Actions still ignores ops-center runtime and still falls back when neither bulk URL was supplied. A partial or rejected bulk pair throws and names the URL.

2. Starting the remote when the resolved API base or auth base is missing or rejected by the normalizer.

3. Each remote reads its own runtime keys. Coupling them makes one product's gateway change break the other.
