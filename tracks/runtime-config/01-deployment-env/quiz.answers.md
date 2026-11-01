# Answers: DEPLOYMENT_ENV and the two config files

1. Ops uses public/app-config.json. Standalone uses src/app.config.ts.

2. development, staging, preproduction, and production. local is only for specific start scripts.

3. Each shell has its own registration list and its own config file. They are not generated from one source.
