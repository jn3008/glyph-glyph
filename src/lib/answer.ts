import { toHiragana, toRomaji } from "wanakana";
import { game_config } from "$lib/stores/game-config";
import {
  greek,
  cyrillic,
  exceptional_answers,
  persoarabic,
} from "$/lib/glyph-database";
import { get } from "svelte/store";
import { arabic_forms } from "$lib/utils";

export function getAnswers(glyph: string): string[] {
  const path = get(game_config)?.path;
  switch (path[0]) {
    case "kana":
      return exceptional_answers.get(toHiragana(glyph)) ?? [toRomaji(glyph)];
    case "greek":
      switch (path[1]) {
        case "transcriptions":
          return greek.transcriptions[
            glyph.toLowerCase() as keyof typeof greek.transcriptions
          ];
        case "names":
          return greek.names[glyph.toLowerCase() as keyof typeof greek.names];
        default:
          return [];
      }
    case "cyrillic": {
      const transcriptions =
        cyrillic.transcriptions[
          path[1] as keyof typeof cyrillic.transcriptions
        ];
      return transcriptions[glyph.toLowerCase() as keyof typeof transcriptions];
    }
    case "persoarabic": {
      const transcriptions =
        persoarabic.transcriptions[
          path[1] as keyof typeof persoarabic.transcriptions
        ];
      // return dict[glyph.toLowerCase() as keyof typeof dict]);

      switch (path[1]) {
        case "arabic": {
          const transcriptions_regional =
            transcriptions[path[2] as keyof typeof transcriptions];
          return transcriptions_regional[
            getIsolatedForm(glyph) as keyof typeof transcriptions_regional
          ];
        }
        default:
          return transcriptions[
            getIsolatedForm(glyph) as keyof typeof transcriptions
          ];
      }
    }
    default:
      return [];
  }
}

// To handle silent letters
export function isSilent(glyph: string): boolean {
  return getAnswers(glyph)[0] === "-";
}

// Reshape an arabic glyph from any form to its isolated form
export function getIsolatedForm(char: string): string | null {
  for (const [key, forms] of Object.entries(arabic_forms))
    if (Object.values(forms).includes(char)) return forms.isolated;
  return null;
}

export function isCorrectAnswer(guess: string, actual: string): boolean {
  if (!get(game_config)?.is_valid) return false;
  switch (get(game_config).path[0]) {
    case "kana":
      return getAnswers(actual).includes(toRomaji(guess.toLowerCase()));
    default:
      return getAnswers(actual).includes(guess);
  }
}
