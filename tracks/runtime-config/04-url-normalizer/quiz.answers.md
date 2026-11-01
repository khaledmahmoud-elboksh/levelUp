# Answers: Normalize a host base URL

1. The base is prefixed onto every request. A query would leak into unrelated calls.

2. "/" after trailing slashes are stripped.

3. /bff is root-relative on the shell origin. //host is protocol-relative and would leave the origin.
