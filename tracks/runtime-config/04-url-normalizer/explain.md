# Normalize a host base URL

A base URL is not a request URL. Credentials, queries, hashes, and odd whitespace would be copied onto every API call.

## Where it lives

- The real function is `normalizeHostBaseUrl` in `promotion-engine-frontend/src/runtime/hostApiConfig.ts`.
- The gym copy is `levelUp/exercises/url-normalizer/normalizeHostBaseUrl.ts`.

## Shape

```ts
if (!value || hasUnsafeBaseCharacters(value)) return undefined;
const isRootRelative = value.startsWith("/") && !value.startsWith("//");
if (url.username || url.password) return undefined;
return value.replace(/\/+$/, "") || "/";
```

## What breaks if you skip it

`https://user:pass@host` or `https://host/api?env=stg` becomes the base of every fetch. A protocol-relative `//host` is treated as a valid base.
