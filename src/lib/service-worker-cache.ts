const appPaths = new Set(["/", "/setup", "/play", "/summary"]);

export function isAppNavigation(request: Request): boolean {
  const pathname = new URL(request.url).pathname.replace(/\/$/, "") || "/";
  return request.mode === "navigate" && appPaths.has(pathname);
}

// Cache only the app shell and build assets, never unsuccessful HTTP responses.
export async function fetchAppResource(
  request: Request,
  cache: Pick<Cache, "match" | "put">,
  fetcher: typeof fetch = fetch,
): Promise<Response> {
  const navigation = isAppNavigation(request);
  if (!navigation) {
    const cached = await cache.match(request);
    if (cached?.ok) return cached;
  }

  try {
    const response = await fetcher(request);
    if (response.ok) {
      // A storage/quota failure should not discard a successful network response.
      await cache.put(request, response.clone()).catch(() => {});
      return response;
    }
    if (!navigation) return response;
    const cached = await cache.match(request);
    const shell = cached?.ok ? cached : await cache.match("/");
    return shell?.ok ? shell : response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached?.ok) return cached;
    if (navigation) {
      const shell = await cache.match("/");
      if (shell?.ok) return shell;
    }
    throw error;
  }
}
