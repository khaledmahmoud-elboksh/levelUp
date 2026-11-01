# Answers: The base query toasts from outside React

1. baseQuery is a plain async function. Hooks only run in React components.

2. The endpoint, via extraOptions.notifyOnFailure. The wrapper stays silent otherwise.

3. Both are antd message. One is the React holder. The other is the non-React caller used by RTK Query.
