# Answers: Menu key, URL, and permission path stay aligned

1. The URL is a path the router matches. The permission path is a key walk through the user permission tree. They use different segments.

2. The route still renders for anyone who types the URL, or the route guard checks a path the menu no longer uses.

3. Standalone uses prefix guards in promotionEngineAccess.ts instead of one array on every child route.
