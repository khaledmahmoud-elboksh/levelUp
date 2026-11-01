export type QueryResult = { status: number };

export type QueryDeps = {
  send: (request: unknown) => Promise<QueryResult>;
  refresh: () => Promise<boolean>;
};

/**
 * Same decision as loyalty `baseQueryWithRefresh`:
 * refresh and replay once on 401. Leave 403, and a second 401, alone.
 */
export async function queryWithRefresh(request: unknown, deps: QueryDeps): Promise<QueryResult> {
  let result = await deps.send(request);
  if (result.status === 401) {
    const refreshed = await deps.refresh();
    if (refreshed) result = await deps.send(request);
  }
  return result;
}
