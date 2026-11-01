# Answers: ProtectedRoutes sends you to login or forbidden

1. No access token in Redux and none in the secure storage wrapper.

2. A token is present, and useCheckUserPermission rejects the route permission path.

3. The first paint can happen before the auth slice is rehydrated. Storage is the copy that survived refresh.
