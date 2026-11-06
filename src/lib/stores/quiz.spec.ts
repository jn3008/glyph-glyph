import { expect, it } from "vitest";
import { get } from "svelte/store";
import { updateGameConfig } from "./game-config";
import { createQuizStore } from "./quiz";

it("keeps the quiz associated with its configuration through progress and resets", () => {
  updateGameConfig("kana-katakana-words20");
  const store = createQuizStore();
  expect(get(store).config_id).toBe("kana-katakana-words20");
  expect(get(store).items).toHaveLength(20);
  store.updateItem(0, (item) => ({ ...item, answered: "test" }));
  store.updateIndex(1);
  store.updateElapsedTime(1000);
  expect(get(store).config_id).toBe("kana-katakana-words20");
  updateGameConfig("kana-hiragana-words50");
  // Merely choosing another config does not relabel the old quiz as that config.
  expect(get(store).config_id).toBe("kana-katakana-words20");
  store.reset();
  expect(get(store).config_id).toBe("kana-hiragana-words50");
  expect(get(store).items).toHaveLength(50);
  expect(get(store).current_idx).toBe(0);
});
