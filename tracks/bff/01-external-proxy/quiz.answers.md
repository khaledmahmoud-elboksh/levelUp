# Answers: The BFF exchanges a token per downstream service

1. The Program Center user token. The controller is Authorized.

2. A client-credentials token for that service, from ServiceTokenProvider.

3. The cached downstream token can expire or be rejected. One refresh and one replay avoids failing the user call on a stale cache.
