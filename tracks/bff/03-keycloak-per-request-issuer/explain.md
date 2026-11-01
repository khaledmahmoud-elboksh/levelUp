# Keycloak issuer is resolved per request

Each tenant has its own Keycloak realm. A single Authority in AddJwtBearer would accept only one issuer.

## Where it lives

- `dsq.programcenter.bff/src/DSQ.ProgramCenter.Bff.Api/Program.cs` sets `IssuerValidator` and a signing-key resolver inside AddJwtBearer.
- `tests/DSQ.ProgramCenter.Bff.Tests/KeycloakSigningKeyResolverTests.cs` covers the resolver.
- CORS defaults include http://localhost:3000. Do not paste realm URLs or secrets here.

## Shape

```ts
opt.TokenValidationParameters.IssuerValidator = (issuer, securityToken, parameters) =>
{
  // accept the issuer that belongs to this request's tenant realm
};
```

## What breaks if you skip it

Users from a second realm get 401 on every BFF call. Or a static Authority is added and the tests for the resolver go red.
