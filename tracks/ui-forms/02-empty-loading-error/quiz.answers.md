# Answers: Empty, loading, and error are three states

1. isLoading is only the first request. A refetch sets isFetching, and the dropdown should keep the loading empty-state instead of "no data".

2. Error, usually isError from the query, rendered as ErrorAlert rather than NoData.

3. ./NoData from the OpsCenter host.
