export type DiffLine = { type: "unchanged" | "added" | "removed" };

/**
 * Same window merge as claims `computeVisibleRanges`.
 * Each changed line grows by `context` on both sides.
 * Overlapping or adjacent windows become one range.
 * A diff with no changes shows the whole file.
 */
export function computeVisibleRanges(lines: DiffLine[], context: number): Array<[number, number]> {
  const changedIndices = lines.map((line, index) => (line.type !== "unchanged" ? index : -1)).filter((index) => index >= 0);

  if (changedIndices.length === 0) return [[0, lines.length - 1]];

  const ranges: Array<[number, number]> = changedIndices.map((index) => [
    Math.max(0, index - context),
    Math.min(lines.length - 1, index + context),
  ]);

  const merged: Array<[number, number]> = [];
  for (const [start, end] of ranges) {
    if (merged.length && start <= merged[merged.length - 1][1] + 1) {
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], end);
    } else {
      merged.push([start, end]);
    }
  }
  return merged;
}
