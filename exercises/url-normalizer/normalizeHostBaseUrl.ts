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
  if (value === "" || hasUnsafeBaseCharacters(value)) return undefined;

  const isRootRelative = value.startsWith("/") && !value.startsWith("//");
  const isHttpUrl = /^https?:\/\/[^/]/i.test(value);
  if (!isRootRelative && !isHttpUrl) return undefined;

  let url: URL;
  try {
    url = new URL(value, "https://promotion-host.invalid");
  } catch {
    return undefined;
  }
  if (url.username !== "" || url.password !== "") return undefined;

  const withoutTrailingSlashes = value.replace(/\/+$/, "");
  return withoutTrailingSlashes === "" ? "/" : withoutTrailingSlashes;
}
