export type PageTab = "list" | "audit";

export type PageAccess = {
  denied: boolean;
  showListTab: boolean;
  showAuditTab: boolean;
  showActions: boolean;
  activeTab: PageTab;
};

/**
 * Same decisions as promotion-engine `resolveExportPageAccess`:
 * listing is the tab, downloading is the actions on that tab, the audit log is
 * its own tab. Download alone has no list to act on, so the page is denied
 * unless list or audit is granted. The requested tab is never repaired in
 * state; the visible tab is derived from the granted flags on every render.
 */
export function resolvePageAccess(
  canListFiles: boolean,
  canDownload: boolean,
  canViewAuditLog: boolean,
  requestedTab: PageTab,
): PageAccess {
  const showListTab = canListFiles;
  const showAuditTab = canViewAuditLog;
  const showActions = canListFiles && canDownload;

  if (!showListTab && !showAuditTab) {
    return {
      denied: true,
      showListTab: false,
      showAuditTab: false,
      showActions: false,
      activeTab: "list",
    };
  }

  let activeTab = requestedTab;
  if (activeTab === "list" && !showListTab) {
    activeTab = "audit";
  }
  if (activeTab === "audit" && !showAuditTab) {
    activeTab = "list";
  }

  return {
    denied: false,
    showListTab,
    showAuditTab,
    showActions,
    activeTab,
  };
}
