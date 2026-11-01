# The BFF exchanges a token per downstream service

The operator holds a Program Center Keycloak token. Downstream APIs want their own client-credentials token. One proxy does that exchange.

## Where it lives

- `dsq.programcenter.bff/src/DSQ.ProgramCenter.Bff.Api/Controllers/ExternalServiceProxyController.cs`
- `ExternalServicesSettings` maps a service name to a base URL.
- `ServiceTokenProvider` caches the downstream token and retries it on 401 or 403.
- Do not copy secrets, client ids, or realm names into the gym.

## Shape

```ts
[Authorize]
[Route("api/external")]
// GET api/external/{service}/{**path}
// mint a cached client-credentials token, forward the body, strip hop-by-hop headers
```

## What breaks if you skip it

The remote calls the downstream API with the user token and gets 401. Or a new service grows a new controller instead of a config entry.
