# Answers: SideBySideDiff is built on the diff package

1. diffLines

2. One range covering the whole file, from 0 to length - 1.

3. The history payload is JSON text. A stable pretty-print makes line diffs meaningful, and safeJsonParse keeps truncated payloads from throwing.
