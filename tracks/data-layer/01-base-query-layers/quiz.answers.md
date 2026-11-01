# Answers: Layer the RTK base query

1. The refresh wrapper can replace a 401 with a success. The toast should see the final result, not the intermediate 401.

2. getResolvedApiConfig(), which prefers the host runtime and falls back to app config.

3. It rejects when the access token or user is missing, so the call never leaves the browser.
