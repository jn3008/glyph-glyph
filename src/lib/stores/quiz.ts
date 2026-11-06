import { get } from "svelte/store";
import { game_config } from "./game-config";
import { shuffleArray } from "$/lib/utils";
import type { Readable } from "svelte/store";
import { glyphs_list } from "$/lib/stores/glyphs";
import { sessionPersistentStore } from "$/lib/persistent-stores";

export interface QuizItem {
  id: string;
  glyph: string;
  answered?: string;
  is_correct_answer?: boolean;
  time_spent?: number;
}

export interface Quiz {
  config_id?: string;
  items: QuizItem[];
  current_idx: number;
  elapsed_time: number;
}

function createQuiz(dictionary: string[]): Quiz {
  const shuffled_items = shuffleArray(dictionary).map((glyph, index) => ({
    id: `item-${index}`,
    glyph: glyph,
  }));

  return {
    config_id: get(game_config).id,
    items: shuffled_items,
    current_idx: 0,
    elapsed_time: -1,
  };
}

export interface QuizStore extends Readable<Quiz> {
  // The internal state of the quiz is managed exclusively through the methods
  reset(): void;
  sync(
    new_items: QuizItem[],
    new_current_idx: number,
    new_elapsed_time: number,
  ): void;
  updateIndex(new_current_idx: number): void;
  updateItem(new_index: number, callback: (item: QuizItem) => QuizItem): void;
  updateElapsedTime(new_elapsed_time: number): void;
}

export function createQuizStore(): QuizStore {
  let glyphs: string[] = [];

  // Sync dictionary with dictionary_store
  glyphs_list.subscribe((value) => {
    glyphs = value;
  });

  const quiz_data = sessionPersistentStore<Quiz>(
    "quiz-session",
    createQuiz(glyphs),
  );

  return {
    subscribe: quiz_data.subscribe,

    reset() {
      quiz_data.set(createQuiz(glyphs));
    },

    sync(new_items, new_current_idx, new_elapsed_time) {
      quiz_data.update(() => {
        return {
          config_id: get(game_config).id,
          items: new_items,
          current_idx: new_current_idx,
          elapsed_time: new_elapsed_time,
        };
      });
    },

    updateIndex(new_current_idx) {
      quiz_data.update(({ config_id, items, elapsed_time }) => {
        return {
          config_id,
          items: items,
          current_idx: new_current_idx,
          elapsed_time: elapsed_time,
        };
      });
    },

    updateItem(index, callback) {
      quiz_data.update(({ config_id, items, current_idx, elapsed_time }) => {
        items[index] = callback(items[index]);
        return {
          config_id,
          items: items,
          current_idx: current_idx,
          elapsed_time: elapsed_time,
        };
      });
    },

    updateElapsedTime(new_elapsed_time: number): void {
      quiz_data.update(({ config_id, items, current_idx, elapsed_time }) => {
        return {
          config_id,
          items: items,
          current_idx: current_idx,
          elapsed_time: new_elapsed_time,
        };
      });
    },
  };
}

export const quiz = createQuizStore();
