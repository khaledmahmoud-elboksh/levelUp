# Merge context windows

Showing three lines around every change is noisy when two changes sit next to each other. Adjacent windows become one range.

## Where it lives

- The real function is `computeVisibleRanges` in `claims-frontend/src/components/SideBySideDiff/utils.ts`.
- The gym copy is `levelUp/exercises/diff-context-ranges/computeVisibleRanges.ts`.

## Shape

```ts
if (merged.length && start <= merged.at(-1)[1] + 1) {
  merged.at(-1)[1] = Math.max(merged.at(-1)[1], end);
} else {
  merged.push([start, end]);
}
```

## What breaks if you skip it

A one-line gap renders as two hunks with a duplicated boundary, or a change at index 0 asks for a negative start.
