import { afterEach, describe, expect, it } from "vitest";
import { get } from "svelte/store";
import { times_store, updateHighScore } from "./times";

const original = get(times_store);
afterEach(() => times_store.set(original));
const mode = "kana-katakana-words20";

describe("high scores", () => {
  it("saves a first record when an older score table has no entry for the mode", () => {
    times_store.set({ best_times: { "kana-katakana-monographs": 12 } });
    expect(updateHighScore(mode, 8.5)).toBe(true);
    expect(get(times_store).best_times).toEqual({
      "kana-katakana-monographs": 12,
      [mode]: 8.5,
    });
  });
  it("updates faster records and preserves equal or slower ones", () => {
    times_store.set({ best_times: { [mode]: 10 } });
    expect(updateHighScore(mode, 11)).toBe(false);
    expect(updateHighScore(mode, 10)).toBe(false);
    expect(updateHighScore(mode, 9)).toBe(true);
    expect(get(times_store).best_times[mode]).toBe(9);
  });
  it("accepts a first record for a mode with its default unset value", () => {
    times_store.set({ best_times: { [mode]: -1 } });
    expect(updateHighScore(mode, 15)).toBe(true);
  });
  it("rejects invalid times and configuration keys", () => {
    times_store.set({ best_times: { [mode]: 10 } });
    for (const time of [0, -1, NaN, Infinity]) {
      expect(updateHighScore(mode, time)).toBe(false);
    }
    expect(updateHighScore("unknown", 5)).toBe(false);
    expect(get(times_store).best_times).toEqual({ [mode]: 10 });
  });
});
