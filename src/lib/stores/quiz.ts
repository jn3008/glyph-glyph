import { shuffleArray } from "$/lib/utils";
import type { Readable } from "svelte/store";
import { dictionary as dictionary_store } from "$lib/stores/dictionary";
import { sessionPersistentStore } from "$/lib/persistent-stores";

export interface QuizItem {
  id: string;
  glyph: string;
  answered?: string;
  incorrect_times?: number;
  is_correct_answer?: boolean;
}

export interface Quiz {
  items: QuizItem[];
  current_idx: number;
}

function createQuiz(dictionary: string[]): Quiz {
  const shuffled_items = shuffleArray(dictionary).map((glyph, index) => ({
    id: `item-${index}`,
    glyph: glyph,
  }));

  return {
    items: shuffled_items,
    current_idx: 0,
  };
}

export interface QuizStore extends Readable<Quiz> {
  // The internal state of the quiz is managed exclusively through the methods
  reset(): void;
  sync(
    new_items: QuizItem[],
    new_current_idx: number,
    new_is_timing: boolean
  ): void;
  updateIndex(new_current_idx: number): void;
  updateItem(new_index: number, callback: (item: QuizItem) => QuizItem): void;
  updateTiming(new_is_timing: boolean): void;
}

export function createQuizStore(): QuizStore {
  let dictionary: string[] = [];

  // Sync dictionary with dictionary_store
  dictionary_store.subscribe((value) => {
    dictionary = value;
  });

  const quiz_data = sessionPersistentStore<Quiz>(
    "quiz-session",
    createQuiz(dictionary)
  );

  return {
    subscribe: quiz_data.subscribe,

    reset() {
      quiz_data.set(createQuiz(dictionary));
    },

    sync(new_items, new_current_idx, new_is_timing) {
      quiz_data.update(() => {
        return {
          items: new_items,
          current_idx: new_current_idx,
          is_timing: new_is_timing,
        };
      });
    },

    updateIndex(new_current_idx) {
      quiz_data.update(({ items }) => {
        return {
          items: items,
          current_idx: new_current_idx,
        };
      });
    },

    updateItem(index, callback) {
      quiz_data.update(({ items, current_idx }) => {
        items[index] = callback(items[index]);
        return {
          items: items,
          current_idx: current_idx,
        };
      });
    },

    updateTiming(new_is_timing) {
      quiz_data.update(({ items, current_idx }) => {
        return {
          items: items,
          current_idx: current_idx,
          is_timing: new_is_timing,
        };
      });
    },
  };
}

export const quiz = createQuizStore();
