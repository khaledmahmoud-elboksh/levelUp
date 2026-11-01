/**
 * Same shape as the helper copied through the frontends:
 * index an array of records by one field. A later row with the same key wins.
 */
export function normalizeBy<T extends Record<string, PropertyKey>>(array: T[], key: keyof T): Record<string, T> {
  return array.reduce<Record<string, T>>((lookup, item) => {
    lookup[String(item[key])] = item;
    return lookup;
  }, {});
}
