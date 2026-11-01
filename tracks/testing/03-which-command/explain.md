# Run the check that repo actually has

Several remotes have no test script. Claiming npm test passed there is a false report. The workspace map lists the real command.

## Where it lives

- `AGENTS.md` verification table.
- promotion-engine uses `npm run biome:check`, not ESLint.
- bulk-actions, wallets, reward-campaign, sku, and pointing-system-settings: `npm run build` is the scripted check.
- The BFF uses `dotnet test` on `DSQ.ProgramCenter.Bff.sln`.
- This gym uses `npm test` and that only runs the five Vitest exercises.

## Shape

```ts
promotion-engine-frontend    npm run biome:check && npm test && npm run build
bulk-actions-frontend         npm run build
dsq.programcenter.bff         dotnet test
levelUp                       npm test
```

## What breaks if you skip it

You run ESLint in promotion and fight Biome. Or you skip a browser check on a repo whose only script is build, and a broken remote ships.
