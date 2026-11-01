# Memorize the workspace gotchas

The program center is many git repos that look alike. The mistakes that waste a day are structural: two shells, two config files, and a remote URL that must be a directory.

## Where it lives

- `ops-center` and `standalone-program-center` both serve port 3000 and both use package name `ops-center-revamp`.
- Ops remote URLs: `ops-center/public/app-config.json`. Standalone remote URLs: `standalone-program-center/src/app.config.ts`.
- Loyalty in standalone is registered in `module-federation.config.ts` and again in routes, the sidebar, and `loyaltyTransactionsMicroFrontendRuntime`.
- Ops still has a legacy `/operation-center/*` tree for claims transactions.

## Shape

```ts
shareStrategy: "loaded-first"

// shell remote URL points at the folder, not a hashed file
"promotion_engine": "http://localhost:4216/"
```

## What breaks if you skip it

Running both shells fails the port bind. Copying one shell config into the other drops flights/dfine or loyalty. Hardcoding `remoteEntry.js` misses builds that emit `remoteEntry.[contenthash].js`.
