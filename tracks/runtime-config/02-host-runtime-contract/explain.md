# The host runtime URL contract

A remote built for one gateway must still call the API base the shell chose at runtime. The shell publishes that on window, and the remote prefers it over its own app config.

## Where it lives

- `promotion-engine-frontend/src/runtime/hostApiConfig.ts` exports `getResolvedApiConfig` and `HOST_API_CONFIG_ERROR`.
- Loyalty has the same idea in its runtime config and `BaseApi.tsx`.
- Standalone injects loyalty, promotion, and bulk-actions runtime overrides from `src/app.config.ts`.
- Hosted bulk actions calls Kong directly. Local queue check is `https://dsquares-gateway.dsquares.tech/bff/externalservices/BulkActions/api/HealthCheck/CheckRabbitMaServer`. Auth refresh uses the same Kong `/bff` host.

## Shape

```ts
const runtime = readProgramCenterRuntime();
if (detectHostMount(runtime) === "ops-center") return fromAppConfig();

const apiBaseUrl = normalizeHostBaseUrl(runtime?.promotionEngineApiBaseUrl);
const authBaseUrl = normalizeHostBaseUrl(runtime?.promotionEngineAuthBaseUrl);
```

## What breaks if you skip it

The remote calls a baked-in staging host while the shell is on preprod. Promotion and loyalty fall back to app config when either runtime URL is missing. Bulk Actions does that only when neither bulk URL was supplied. If the host supplies one bulk URL, or a URL the normalizer rejects, `getResolvedApiConfig` throws `HOST_API_CONFIG_ERROR` and names `bulkActionsApiBaseUrl` or `bulkActionsAuthBaseUrl`. Ops Center still ignores the window runtime.
