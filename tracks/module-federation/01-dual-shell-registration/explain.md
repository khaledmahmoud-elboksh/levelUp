# Register a remote in both shells

A new screen is invisible until the shell knows the remote URL, the expose name, the route, and the permission. Ops and standalone store those in different files.

## Where it lives

- `ops-center/module-federation.config.ts` and `ops-center/public/app-config.json`.
- `standalone-program-center/module-federation.config.ts` and `standalone-program-center/src/app.config.ts`.
- The expose string in the remote, such as `promotion-engine-frontend/module-federation.config.ts` exposing `./promotion-engine-micro-fe-app`, must match the shell import.

## Shape

```ts
remotes: {
  promotion_engine: `promotion_engine@${remoteEntries.promotion_engine}`,
}

// remote
exposes: { "./promotion-engine-micro-fe-app": "./src/App.tsx" }
```

## What breaks if you skip it

The menu links to a route whose import() name does not match the expose. The browser requests remoteEntry and the module is undefined.
