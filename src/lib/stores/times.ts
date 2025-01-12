import { full_keys } from "$/lib/glyph-configurations";
import { localPersistentStore } from "$/lib/persistent-stores";
import { get } from "svelte/store";

interface Times {
  best_times: Record<string, number>;
}

const default_times = full_keys.reduce<Record<string, number>>(
  (scores, key) => {
    scores[key] = -1; // Default high score (no high score set yet)
    return scores;
  },
  {}
);

export const times_store = localPersistentStore<Times>("high-scores", {
  best_times: default_times,
});

export function updateHighScore(
  configuration: string,
  new_best_time: number
): boolean {
  const old_best_time = get(times_store).best_times[configuration];

  if (old_best_time < 0 || new_best_time < old_best_time) {
    times_store.update((old_times_store) => {
      return {
        ...old_times_store,
        best_times: {
          ...old_times_store.best_times,
          [configuration]: new_best_time,
        },
      };
    });
    return true;
  }
  return false;
}

export function updateElapsedTime(new_elapsed_time: number): void {
  times_store.update((old_times_store) => {
    return {
      ...old_times_store,
      elapsed_time: new_elapsed_time,
    };
  });
}
