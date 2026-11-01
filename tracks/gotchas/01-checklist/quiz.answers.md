# Answers: Memorize the workspace gotchas

1. Both shells use package name ops-center-revamp and MF name OpsCenter, and both want port 3000.

2. Ops reads public/app-config.json. Standalone reads src/app.config.ts.

3. Many remotes emit remoteEntry.[contenthash].js. The host resolves the entry from the directory.
