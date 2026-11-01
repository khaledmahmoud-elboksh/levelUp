# The host runtime URL contract

A remote built for one gateway must still call the API base the shell chose at runtime. The shell publishes that on window, and the remote prefers it over its own app config.

## Where it lives

- `promotion-engine-frontend/src/runtime/hostApiConfig.ts` exports `getResolvedApiConfig` and `HOST_API_CONFIG_ERROR`.
- Loyalty has the same idea in its runtime config and `BaseApi.tsx`.
- Standalone injects loyalty and promotion runtime overrides from `src/app.config.ts`.

## Shape

```ts
const runtime = readProgramCenterRuntime();
if (detectHostMount(runtime) === "ops-center") return fromAppConfig();

const apiBaseUrl = normalizeHostBaseUrl(runtime?.promotionEngineApiBaseUrl);
const authBaseUrl = normalizeHostBaseUrl(runtime?.promotionEngineAuthBaseUrl);
```

## What breaks if you skip it

The remote calls a baked-in staging host while the shell is on preprod. A partial runtime object, or a URL with a query string, throws HOST_API_CONFIG_ERROR or falls back to the wrong base.
