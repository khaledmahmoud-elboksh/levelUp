# Production-only Amplitude

The browser key and the CDN script load only for a production build. Every other environment calls track and gets a no-op.

## Where it lives

- `bulk-actions-frontend/src/utility/amplitude.ts` is the reference. The key constant sits next to the CDN loader. `initializeAmplitude()` takes no argument. `src/App.tsx` calls it once from an effect.
- `bulk-actions-frontend/src/utility/tracking.ts` adds common properties and calls `trackAmplitude`. It does not boot the script.
- `promotion-engine-frontend/src/utility/amplitude.ts` follows that reference. `src/utility/tracking.ts` and `trackingCatalog.ts` fire pool events with allowlisted properties.
- `loyalty-transactions-frontend/src/utility/amplitude.ts` follows that reference. `App` calls `initializeAmplitude()` once from its mount effect. `src/utility/tracking.ts` and `trackingCatalog.ts` fire redeem, reward, refund, and cancel events with allowlisted properties. Click and success handlers do not send request bodies, headers, or file contents.
- `wallets-frontend/src/utility/amplitude.ts` is the older copy. Its key is still on the production object in `app.config.ts`, and `tracking.ts` calls `initializeAmplitude` at import.
- The reference key stays out of `app.config.ts`, `.env`, Docker build arguments, and `deployments-gitops`.

## Shape

```ts
const AMPLITUDE_API_KEY = "<production browser key>";
if (!isProduction) return;
// append https://cdn.amplitude.com/script/${AMPLITUDE_API_KEY}.js
// then amplitude.init(AMPLITUDE_API_KEY, ...)
if (!isProduction) return; // track, identify, and user properties
```

`isProduction` is `process.env.DEPLOYMENT_ENV === "production"`.

## What breaks if you skip it

A staging or local session sends events into the production project. Or a production build with no key still injects a script URL that cannot init.
