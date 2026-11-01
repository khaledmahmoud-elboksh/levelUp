import { describe, expect, it } from "vitest";
import { computeVisibleRanges, type DiffLine } from "./computeVisibleRanges";

const line = (type: DiffLine["type"]): DiffLine => ({ type });

describe("computeVisibleRanges", () => {
  it("shows the whole file when nothing changed", () => {
    const lines = [line("unchanged"), line("unchanged"), line("unchanged")];
    expect(computeVisibleRanges(lines, 3)).toEqual([[0, 2]]);
  });

  it("expands one change by the context on both sides and clamps to the file", () => {
    const lines = [line("unchanged"), line("added"), line("unchanged"), line("unchanged"), line("unchanged")];
    expect(computeVisibleRanges(lines, 1)).toEqual([[0, 2]]);
  });

  it("merges overlapping windows into one range", () => {
    const lines = [line("added"), line("unchanged"), line("removed"), line("unchanged")];
    expect(computeVisibleRanges(lines, 1)).toEqual([[0, 3]]);
  });

  it("keeps a gap when the windows are more than one line apart", () => {
    const lines = [
      line("added"),
      line("unchanged"),
      line("unchanged"),
      line("unchanged"),
      line("unchanged"),
      line("removed"),
    ];
    expect(computeVisibleRanges(lines, 1)).toEqual([
      [0, 1],
      [4, 5],
    ]);
  });
});
