function hasUnsafeBaseCharacters(value: string): boolean {
  for (const character of value) {
    const code = character.charCodeAt(0);
    if (code <= 32 || character === "\\" || character === "?" || character === "#") {
      return true;
    }
  }
  return false;
}

/**
 * Same rules as promotion-engine `normalizeHostBaseUrl`.
 * A host base URL is a root-relative path or an http(s) URL, with no
 * credentials, query, or hash, and with trailing slashes removed.
 */
export function normalizeHostBaseUrl(input: unknown): string | undefined {
  if (typeof input !== "string") return undefined;
  const value = input.trim();
  if (!value || hasUnsafeBaseCharacters(value)) return undefined;
  const isRootRelative = value.startsWith("/") && !value.startsWith("//");
  if (!isRootRelative && !/^https?:\/\/[^/]/i.test(value)) return undefined;
  try {
    const url = new URL(value, "https://promotion-host.invalid");
    if (url.username || url.password) return undefined;
    return value.replace(/\/+$/, "") || "/";
  } catch {
    return undefined;
  }
}
