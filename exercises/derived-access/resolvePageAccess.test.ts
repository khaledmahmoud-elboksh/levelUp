import { describe, expect, it } from "vitest";
import { resolvePageAccess } from "./resolvePageAccess";

describe("resolvePageAccess", () => {
  it("honors the requested tab when everything is granted", () => {
    expect(resolvePageAccess(true, true, true, "audit")).toEqual({
      denied: false,
      showListTab: true,
      showAuditTab: true,
      showActions: true,
      activeTab: "audit",
    });
  });

  it("denies when only download is granted", () => {
    expect(resolvePageAccess(false, true, false, "list").denied).toBe(true);
  });

  it("falls back to the list tab when audit is requested but not granted", () => {
    const access = resolvePageAccess(true, true, false, "audit");
    expect(access.denied).toBe(false);
    expect(access.activeTab).toBe("list");
    expect(access.showActions).toBe(true);
  });

  it("falls back to the audit tab when the list is not granted", () => {
    const access = resolvePageAccess(false, false, true, "list");
    expect(access.denied).toBe(false);
    expect(access.activeTab).toBe("audit");
    expect(access.showActions).toBe(false);
  });

  it("keeps the requested tab when it is granted", () => {
    const access = resolvePageAccess(true, true, true, "list");
    expect(access.activeTab).toBe("list");
  });
});
