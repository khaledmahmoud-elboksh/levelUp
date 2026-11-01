# loaded-first avoids eager remote fetches

version-first asks every remote for its version at startup. Unreachable staging hosts stall the shell before the user opens a page.

## Where it lives

- Both `ops-center/module-federation.config.ts` and `standalone-program-center/module-federation.config.ts` set `shareStrategy: "loaded-first"`.
- Shared singletons are react, react-dom, and react-router-dom.
- The standalone file has a comment that explains why version-first was rejected. Read that comment.

## Shape

```ts
shareStrategy: "loaded-first",
shared: {
  react: { singleton: true, requiredVersion: deps.react },
  "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
}
```

## What breaks if you skip it

The network panel fills with remoteEntry requests for remotes you are not using, and one dead host blocks startup.
