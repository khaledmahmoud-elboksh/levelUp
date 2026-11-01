# Standalone dev proxy for /bff

The browser must call the BFF on the same origin as the shell. Standalone rewrites /bff to the real gateway only while the Rsbuild dev server is running.

## Where it lives

- `standalone-program-center/rsbuild.config.ts` proxies `/bff` when the dev server is on.
- `standalone-program-center/src/app.config.ts` sets `BFF_API_URL` to `/bff` in dev and keeps localhost remote entries.
- `standalone-program-center/src/store/apis/BffAPI.ts` uses that base URL.

## Shape

```ts
// dev browser call
fetch("/bff/api/auth/...")

// rsbuild forwards that path to the gateway origin
server.proxy["/bff"]
```

## What breaks if you skip it

The browser talks to the gateway host directly, the preflight fails, and login looks like a CORS bug. Dev also loads staging remoteEntry files that the browser cannot reach.
