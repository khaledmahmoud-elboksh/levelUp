# Answers: Standalone dev proxy for /bff

1. http://localhost:3000/bff/... The gateway host is only the proxy target.

2. Staging remote hosts are not running on your machine, and fetching their remoteEntry from localhost is blocked or useless.

3. standalone-program-center. Ops reads deployed app-config.json and does not use this dev proxy the same way.
