import { describe, expect, it } from "vitest";
import { normalizeHostBaseUrl } from "./normalizeHostBaseUrl";

describe("normalizeHostBaseUrl", () => {
  it("strips trailing slashes from an http base", () => {
    expect(normalizeHostBaseUrl("https://gateway.example/api/")).toBe("https://gateway.example/api");
  });

  it("keeps a root-relative base and collapses a slash-only path to /", () => {
    expect(normalizeHostBaseUrl("/bff/externalservices/api/")).toBe("/bff/externalservices/api");
    expect(normalizeHostBaseUrl("/")).toBe("/");
  });

  it("rejects credentials, queries, hashes, and protocol-relative URLs", () => {
    expect(normalizeHostBaseUrl("https://user:pass@gateway.example")).toBeUndefined();
    expect(normalizeHostBaseUrl("https://gateway.example/api?x=1")).toBeUndefined();
    expect(normalizeHostBaseUrl("https://gateway.example/api#frag")).toBeUndefined();
    expect(normalizeHostBaseUrl("//gateway.example")).toBeUndefined();
  });

  it("rejects non-strings, blanks, and embedded whitespace", () => {
    expect(normalizeHostBaseUrl(null)).toBeUndefined();
    expect(normalizeHostBaseUrl("  ")).toBeUndefined();
    expect(normalizeHostBaseUrl("https://gateway.example/api path")).toBeUndefined();
  });
});
