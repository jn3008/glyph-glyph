import { toHiragana, toRomaji } from "wanakana";
import { game_config } from "$lib/stores/game-config";
import {
  greek,
  cyrillic,
  exceptional_answers,
  persoarabic,
  hangul,
} from "$/lib/glyph-database";
import { get } from "svelte/store";
import { arabic_forms } from "$lib/utils";

export function getAnswers(glyph: string): string[] {
  const path_dict = get(game_config)?.path_dict;
  switch (path_dict.alphabet) {
    case "kana":
      return exceptional_answers.get(toHiragana(glyph)) ?? [toRomaji(glyph)];
    case "greek":
      switch (path_dict.mode) {
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
          path_dict.language as keyof typeof cyrillic.transcriptions
        ];
      return transcriptions[glyph.toLowerCase() as keyof typeof transcriptions];
    }
    case "persoarabic": {
      const transcriptions =
        persoarabic.transcriptions[
          path_dict.language as keyof typeof persoarabic.transcriptions
        ];
      // return dict[glyph.toLowerCase() as keyof typeof dict]);

      switch (path_dict.language) {
        case "arabic": {
          const transcriptions_regional =
            transcriptions[
              path_dict.pronunciation as keyof typeof transcriptions
            ];
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
    case "hangul": {
      switch (path_dict.glyphs) {
        case "vowels":
          return hangul.transcriptions.vowels[
            glyph as keyof typeof hangul.transcriptions.vowels
          ];
        case "consonants":
          switch (path_dict.position) {
            case "choseong":
              return hangul.transcriptions.initial[
                glyph as keyof typeof hangul.transcriptions.initial
              ];
            case "batchim":
              return hangul.transcriptions.final[
                glyph as keyof typeof hangul.transcriptions.final
              ];
            default:
              return [];
          }

        case "syllables": {
          return romaniseHangul(glyph);
        }
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

export function romaniseHangul(syllable: string): string[] {
  if (
    syllable.length !== 1 ||
    syllable.charCodeAt(0) < 0xac00 ||
    syllable.charCodeAt(0) > 0xd7a3
  ) {
    throw new Error("Invalid Hangul syllable input.");
  }

  const syllable_code = syllable.charCodeAt(0) - 0xac00;

  // Decompose the syllable into its components
  const initial_index = Math.floor(syllable_code / 588);
  const vowel_index = Math.floor((syllable_code % 588) / 28);
  const final_index = syllable_code % 28;

  const initial = hangul.glyphs.initial_consonants[initial_index];
  const vowel = hangul.glyphs.vowels[vowel_index];
  const final =
    final_index > 0 ? hangul.glyphs.final_consonants[final_index - 1] : "";

  const initial_transcription =
    hangul.transcriptions.initial[
      initial as keyof typeof hangul.transcriptions.initial
    ][0];
  const vowel_transcription =
    hangul.transcriptions.vowels[
      vowel as keyof typeof hangul.transcriptions.vowels
    ][0];

  const final_transcription =
    final_index > 0
      ? hangul.transcriptions.final[
          final as keyof typeof hangul.transcriptions.final
        ][0]
      : "";

  const romanisation: string =
    (initial_transcription == "-" ? "" : initial_transcription) +
    vowel_transcription +
    final_transcription;

  return [romanisation];
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
