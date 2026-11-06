import { describe, expect, it } from "vitest";
import { full_keys } from "$lib/glyph-configurations";
import {
  configLink,
  configFromHash,
  isConfigPath,
  urlWithConfig,
} from "./setup-url";

describe("setup configuration URLs", () => {
  it("carries the configuration in setup and play links", () => {
    expect(configLink("/play", "kana-katakana-words50")).toBe(
      "/play#config=kana-katakana-words50",
    );
    expect(configLink("/setup", "kana-hiragana")).toBe(
      "/setup#config=kana-hiragana",
    );
    expect(configLink("/setup", "invalid")).toBe("/setup");
  });
  it("round-trips every supported configuration", () => {
    for (const id of full_keys) {
      const url = urlWithConfig(new URL("https://example.com/setup"), id);
      expect(configFromHash(url.hash)).toBe(id);
    }
  });
  it("accepts valid incomplete paths and rejects invalid branches", () => {
    expect(configFromHash("#config=kana-katakana")).toBe("kana-katakana");
    expect(isConfigPath("kana")).toBe(true);
    for (const id of [
      "bogus",
      "kana-unknown",
      "kana-katakana-words50-extra",
      "kana--katakana",
    ]) {
      expect(configFromHash(`#config=${id}`)).toBe("");
    }
  });
  it("distinguishes absent configuration from explicit empty or invalid values", () => {
    expect(configFromHash("")).toBeNull();
    expect(configFromHash("#other=value")).toBeNull();
    expect(configFromHash("#config=")).toBe("");
    expect(configFromHash("#config=%E0%A4%A")).toBe("");
    expect(configFromHash("#config=kana&config=greek")).toBe("");
  });
  it("preserves the path, query and unrelated fragment parameters", () => {
    const original = new URL(
      "https://example.com/setup?test=1#other=keep&config=greek",
    );
    const updated = urlWithConfig(original, "kana-hiragana-words20");
    expect(updated.href).toBe(
      "https://example.com/setup?test=1#other=keep&config=kana-hiragana-words20",
    );
    expect(urlWithConfig(updated, "").href).toBe(
      "https://example.com/setup?test=1#other=keep",
    );
    expect(original.hash).toBe("#other=keep&config=greek");
  });
});
