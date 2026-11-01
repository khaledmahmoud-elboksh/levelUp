# normalizeBy builds a lookup

Tag labels and similar maps need O(1) access by id. The same five-line reduce is copied into eight frontends.

## Where it lives

- `bulk-actions-frontend/src/utility/index.ts` exports `normalizeBy`.
- reward-campaign `TagSelect` uses it so a tag can show the option label.
- The gym copy is `levelUp/exercises/normalize-by/normalizeBy.ts`.

## Shape

```ts
export const normalizeBy = (array, key) =>
  array.reduce((obj, item) => {
    obj[item[key]] = item;
    return obj;
  }, {});
```

## What breaks if you skip it

A render calls array.find inside tagRender for every tag on every keystroke. A duplicated key silently keeps the first row in one repo and the last row in another.
