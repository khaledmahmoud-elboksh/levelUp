import { describe, expect, it } from "vitest";
import { checkPermission, type PermissionUser } from "./checkPermission";

const user: PermissionUser = {
  permissions: [
    {
      key: "PointingSystem",
      isSelected: true,
      children: [
        {
          key: "LoyaltyTransactions",
          isSelected: true,
          components: [
            {
              key: "Transactions",
              isSelected: true,
              features: [{ key: "ViewPage", isSelected: true }, { key: "Export", isSelected: false }],
            },
          ],
        },
      ],
    },
  ],
};

describe("checkPermission", () => {
  it("returns true when accessAll is set, even if the path is missing", () => {
    expect(checkPermission({ accessAll: true }, ["Missing"])).toBe(true);
  });

  it("returns true when no path is required", () => {
    expect(checkPermission(user)).toBe(true);
  });

  it("returns undefined when the user has no permission tree", () => {
    expect(checkPermission({ permissions: [] }, ["PointingSystem"])).toBeUndefined();
  });

  it("walks children, then components, then features", () => {
    expect(checkPermission(user, ["PointingSystem", "LoyaltyTransactions", "Transactions", "ViewPage"])).toBe(true);
    expect(checkPermission(user, ["PointingSystem", "LoyaltyTransactions", "Transactions", "Export"])).toBe(false);
  });

  it("returns false when a segment of the path does not exist", () => {
    expect(checkPermission(user, ["PointingSystem", "Missing"])).toBe(false);
  });
});
