# Playwright guards shadow DOM styles

A shadow root hides CSS bugs from a unit test that never attaches a shadow root. Promotion has a Playwright spec that loads the remote and reads computed styles.

## Where it lives

- `promotion-engine-frontend/e2e/shadow-styles.spec.ts`
- One case aborts `files.manifest.json` so the spec can prove styles still come from the fallback path.
- Run it with the promotion e2e script, not from the gym.

## Shape

```ts
test("keeps styles when the manifest is blocked", async ({ page }) => {
  await page.route("**/files.manifest.json", (route) => route.abort());
  // assert a computed style inside the shadow tree
});
```

## What breaks if you skip it

A manifest change drops the CSS URL. The unit tests still pass because they never loaded the shadow root. The hosted page is unstyled until someone reloads.
