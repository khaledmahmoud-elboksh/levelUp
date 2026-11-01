import { describe, expect, it } from "vitest";
import { normalizeBy } from "./normalizeBy";

describe("normalizeBy", () => {
  it("indexes records by the named field", () => {
    const rows = [
      { value: "a", label: "Alpha" },
      { value: "b", label: "Beta" },
    ];
    expect(normalizeBy(rows, "value")).toEqual({
      a: { value: "a", label: "Alpha" },
      b: { value: "b", label: "Beta" },
    });
  });

  it("lets a later row replace an earlier row with the same key", () => {
    const rows = [
      { value: "a", label: "First" },
      { value: "a", label: "Second" },
    ];
    expect(normalizeBy(rows, "value").a.label).toBe("Second");
  });

  it("returns an empty object for an empty array", () => {
    expect(normalizeBy([], "value")).toEqual({});
  });
});
