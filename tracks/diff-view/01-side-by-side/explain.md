# SideBySideDiff is built on the diff package

Voucher history needs a GitHub-style before/after view. The repos did not adopt a diff component library. They call diffLines and draw the rows themselves.

## Where it lives

- `claims-frontend/src/components/SideBySideDiff/index.tsx`
- `claims-frontend/src/components/SideBySideDiff/utils.ts` exports `buildFlatLines` and `computeVisibleRanges`.
- The same component is copied in channels, ops-center, and standalone.

## Shape

```ts
import { diffLines } from "diff";
const differences = diffLines(oldText, newText);
```

## What breaks if you skip it

A huge unchanged JSON payload is rendered line by line. Or truncated JSON throws and the history page crashes instead of showing a fallback.
