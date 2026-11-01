# Answers: Refresh once on 401

1. One. The second 401 is returned.

2. The session is authenticated. Refreshing will not grant a permission the server refused.

3. Only after a 401 whose refresh returns true.
