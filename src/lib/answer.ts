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
  switch (get(game_config)?.path[0]) {
    case "kana":
      return exceptional_answers.get(toHiragana(glyph)) ?? [toRomaji(glyph)];
    case "greek":
      switch (get(game_config).path[1]) {
        case "transcriptions":
          return greek.transcriptions[
            glyph.toLowerCase() as keyof typeof greek.transcriptions
          ];
        case "names":
          return greek.names[glyph.toLowerCase() as keyof typeof greek.names];
        default:
          return [];
      }
    case "cyrillic":
      switch (get(game_config).path[1]) {
        case "bulgarian":
          return cyrillic.bg_transcriptions[
            glyph.toLowerCase() as keyof typeof cyrillic.bg_transcriptions
          ];
        case "russian":
          return cyrillic.ru_transcriptions[
            glyph.toLowerCase() as keyof typeof cyrillic.ru_transcriptions
          ];
        case "serbian":
          return cyrillic.sr_transcriptions[
            glyph.toLowerCase() as keyof typeof cyrillic.sr_transcriptions
          ];
        default:
          return [];
      }
    case "persoarabic":
      switch (get(game_config).path[1]) {
        case "arabic":
          switch (get(game_config).path[3]) {
            case "standard":
              return persoarabic.arabic_transcriptions[
                getIsolatedForm(
                  glyph
                ) as keyof typeof persoarabic.arabic_transcriptions
              ];
            default:
              return [];
          }
        case "persian":
          return persoarabic.persian_transcriptions[
            getIsolatedForm(
              glyph
            ) as keyof typeof persoarabic.persian_transcriptions
          ];
        case "urdu":
          return persoarabic.urdu_transcriptions[
            getIsolatedForm(
              glyph
            ) as keyof typeof persoarabic.urdu_transcriptions
          ];
        default:
          return [];
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
