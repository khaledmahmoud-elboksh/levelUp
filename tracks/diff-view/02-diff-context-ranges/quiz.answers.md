# Answers: Merge context windows

1. When the next start is less than or equal to the previous end plus one. That includes a touching neighbor.

2. Math.max(0, index - context)

3. [[0, lines.length - 1]]
