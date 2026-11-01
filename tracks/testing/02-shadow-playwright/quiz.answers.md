# Answers: Playwright guards shadow DOM styles

1. To prove styles still apply when the manifest cannot be fetched, using the fallback CSS path.

2. The bug is computed style inside a real shadow root after navigation. A jsdom render does not cover that.

3. promotion-engine-frontend
