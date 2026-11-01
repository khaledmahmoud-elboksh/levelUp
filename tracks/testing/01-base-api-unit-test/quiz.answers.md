# Answers: Mock fetchBaseQuery for the 401 path

1. fetchBaseQuery from RTK Query.

2. The refresh or recoverSession path.

3. getResolvedApiConfig reads it. Without it the query fails before status handling.
