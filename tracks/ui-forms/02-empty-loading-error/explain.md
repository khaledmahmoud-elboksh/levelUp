# Empty, loading, and error are three states

A select with no options is not the same as a select still fetching, and neither is a failed request.

## Where it lives

- Loyalty uses `NoDataContent` as `notFoundContent`, and passes loading flags.
- Promotion uses `NoDataState` for empty lists.
- Shells expose `./NoData` from module federation for reuse.
- Grids also read `isError` from the query hook inside GeneralGridV2.

## Shape

```ts
<Select
  notFoundContent={<NoDataContent isLoading={isLoading || isFetching} />}
/>
```

## What breaks if you skip it

A dropdown flashes "no data" on every keystroke refetch because only isLoading was checked. isLoading is true on the first load. isFetching is true on later loads too.
