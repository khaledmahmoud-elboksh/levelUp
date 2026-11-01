# Answers: Keycloak issuer is resolved per request

1. Tenants use different Keycloak realms. The issuer and signing keys are chosen per request.

2. DSQ.ProgramCenter.Bff.Tests, KeycloakSigningKeyResolverTests.

3. http://localhost:3000, the shell port. 4217 and 5173 are also defaults.
