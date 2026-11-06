import { describe, expect, it, vi } from "vitest";
import { fetchAppResource, isAppNavigation } from "./service-worker-cache";

function request(path: string, navigation = false) {
  const result = new Request(`https://example.com${path}`);
  if (navigation) Object.defineProperty(result, "mode", { value: "navigate" });
  return result;
}
function memoryCache() {
  const entries = new Map<string, Response>();
  const key = (value: RequestInfo | URL) =>
    typeof value === "string"
      ? new URL(value, "https://example.com").href
      : value instanceof URL
        ? value.href
        : value.url;
  return {
    match: vi.fn(async (value: RequestInfo | URL) =>
      entries.get(key(value))?.clone(),
    ),
    put: vi.fn(async (value: RequestInfo | URL, response: Response) => {
      entries.set(key(value), response.clone());
    }),
  };
}

describe("service worker refresh handling", () => {
  it("recognizes app navigations without treating missing assets as pages", () => {
    expect(isAppNavigation(request("/setup/", true))).toBe(true);
    expect(isAppNavigation(request("/setup"))).toBe(false);
    expect(isAppNavigation(request("/missing.js", true))).toBe(false);
  });
  it("uses a fresh page online instead of stale cached HTML", async () => {
    const cache = memoryCache();
    const req = request("/setup", true);
    await cache.put(req, new Response("old"));
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValue(new Response("new"));
    expect(await (await fetchAppResource(req, cache, fetcher)).text()).toBe(
      "new",
    );
    expect(await (await cache.match(req))?.text()).toBe("new");
  });
  it("falls back to the precached shell on an offline first visit to setup", async () => {
    const cache = memoryCache();
    await cache.put("/", new Response("app shell"));
    const fetcher = vi
      .fn<typeof fetch>()
      .mockRejectedValue(new TypeError("offline"));
    expect(
      await (
        await fetchAppResource(request("/setup", true), cache, fetcher)
      ).text(),
    ).toBe("app shell");
  });
  it("does not cache server errors and recovers through the shell", async () => {
    const cache = memoryCache();
    await cache.put("/", new Response("app shell"));
    cache.put.mockClear();
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValue(new Response("error", { status: 503 }));
    expect(
      await (
        await fetchAppResource(request("/setup", true), cache, fetcher)
      ).text(),
    ).toBe("app shell");
    expect(cache.put).not.toHaveBeenCalled();
  });
  it("serves cached build assets offline but never returns HTML for missing JS", async () => {
    const cache = memoryCache();
    await cache.put("/", new Response("app shell"));
    await cache.put("/asset.js", new Response("javascript"));
    const fetcher = vi
      .fn<typeof fetch>()
      .mockRejectedValue(new TypeError("offline"));
    expect(
      await (
        await fetchAppResource(request("/asset.js"), cache, fetcher)
      ).text(),
    ).toBe("javascript");
    expect(fetcher).not.toHaveBeenCalled();
    await expect(
      fetchAppResource(request("/missing.js"), cache, fetcher),
    ).rejects.toThrow("offline");
  });
  it("returns successful network responses even when cache writes fail", async () => {
    const cache = memoryCache();
    cache.put.mockRejectedValue(new Error("quota exceeded"));
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValue(new Response("fresh"));
    expect(
      await (
        await fetchAppResource(request("/setup", true), cache, fetcher)
      ).text(),
    ).toBe("fresh");
  });
});
