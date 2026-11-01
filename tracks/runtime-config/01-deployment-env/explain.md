# DEPLOYMENT_ENV and the two config files

One codebase ships to development, staging, preproduction, and production. The build script selects the environment, and each shell reads a different file for the remote map.

## Where it lives

- Ops build reads `ops-center/public/app-config.json`, keyed by environment, including `microAppsRemoteEntries`.
- Standalone reads `standalone-program-center/src/app.config.ts`, which switches on `process.env.DEPLOYMENT_ENV`.
- Scripts look like `npm run build:staging`, which sets `DEPLOYMENT_ENV=staging`.

## Shape

```ts
// ops-center/rsbuild.config.ts reads JSON at build time
const remoteEntries = appConfig[deploymentEnv].microAppsRemoteEntries

// standalone/src/app.config.ts
const deploymentEnv = process.env.DEPLOYMENT_ENV
```

## What breaks if you skip it

A remote URL fixed in only one shell shows up in ops and 404s in standalone, or the reverse. Staging builds still point at localhost when the wrong key is selected.
