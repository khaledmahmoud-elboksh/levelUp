export type PermissionNode = {
  key: string;
  isSelected?: boolean;
  children?: PermissionNode[];
  components?: PermissionNode[];
  features?: PermissionNode[];
};

export type PermissionUser = {
  accessAll?: boolean;
  permissions?: PermissionNode[];
};

function findByKey(nodes: PermissionNode[] | undefined, key: string): PermissionNode | null {
  if (!nodes) return null;
  return nodes.find((item) => item.key === key) ?? null;
}

export function findPermissionItemByPath(nodes: PermissionNode[] | undefined, path: string[]): PermissionNode | null {
  if (!path || path.length === 0) return null;
  const found = findByKey(nodes, path[0]);
  if (!found) return null;
  if (path.length === 1) return found;
  const rest = path.slice(1);
  if (found.children && found.children.length > 0) return findPermissionItemByPath(found.children, rest);
  if (found.components && found.components.length > 0) return findPermissionItemByPath(found.components, rest);
  if (found.features && found.features.length > 0) return findPermissionItemByPath(found.features, rest);
  return null;
}

/**
 * Same decisions as ops-center `checkUserPermission`:
 * accessAll wins, a missing path is allowed, an empty permission list is unknown,
 * a found node returns its isSelected flag, and a missing node is false.
 */
export function checkPermission(user: PermissionUser, path?: string[]): boolean | undefined {
  if (user?.accessAll) return true;
  if (!path) return true;
  const permissions = user.permissions ?? [];
  if (permissions.length === 0) return undefined;
  const found = findPermissionItemByPath(permissions, path);
  if (!found) return false;
  return found.isSelected;
}
