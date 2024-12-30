import { full_keys } from "$/lib/glyph-configurations";
import { localPersistentStore } from "$/lib/persistent-stores";
import { get } from "svelte/store";

type Scores = Record<string, number>;

const default_scores = full_keys.reduce<Scores>((scores, key) => {
  scores[key] = -1; // Default high score (no high score set yet)
  return scores;
}, {});

export const high_scores = localPersistentStore<Scores>(
  "high-scores",
  default_scores
);

export function updateHighScore(
  configuration: string,
  new_high_score: number
): boolean {
  const old_high_score = get(high_scores)[configuration];

  if (old_high_score < 0 || new_high_score < old_high_score) {
    high_scores.update((old_scores) => {
      return {
        ...old_scores,
        [configuration]: new_high_score,
      };
    });
    return true;
  }
  return false;
}
