import { configurations, type Mode } from "$lib/glyph-configurations";

// Incomplete paths are useful URLs too: the next choices remain visible.
export function isConfigPath(id: string): boolean {
  if (id === "") return true;
  let options: Mode[] = configurations;
  for (const key of id.split("-")) {
    const option = options.find((candidate) => candidate.key === key);
    if (!option) return false;
    options = option.modes ?? [];
  }
  return true;
}

// null means no URL selection; an invalid explicit selection resets the picker.
export function configFromHash(hash: string): string | null {
  const params = new URLSearchParams(hash.replace(/^#/, ""));
  if (!params.has("config")) return null;
  const values = params.getAll("config");
  return values.length === 1 && isConfigPath(values[0]) ? values[0] : "";
}

export function urlWithConfig(url: URL, id: string): URL {
  const result = new URL(url);
  const params = new URLSearchParams(result.hash.slice(1));
  if (id && isConfigPath(id)) params.set("config", id);
  else params.delete("config");
  result.hash = params.toString();
  return result;
}

// Root-relative links work from setup, play and summary, including a fresh tab.
export function configLink(path: string, id: string): string {
  const url = urlWithConfig(new URL(path, "https://glyph.invalid"), id);
  return url.pathname + url.search + url.hash;
}
