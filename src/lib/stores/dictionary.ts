import { derived } from "svelte/store";
import { toKatakana } from "wanakana";
import { game_config, generatePathDict } from "./game-config";
import {
  hiragana,
  greek,
  cyrillic,
  persoarabic,
  hangul,
} from "$/lib/glyph-database";
import { arabic_forms, generateRandomHangulWeighted } from "$lib/utils";

function processKana(submode: string): string[] {
  return [
    ...hiragana.monographs,
    ...(["all", "diacritics"].includes(submode) ? hiragana.diacritics : []),
    ...(["all", "digraphs"].includes(submode) ? hiragana.digraphs : []),
    ...(submode === "all" ? hiragana.digraphs_diacritics : []),
  ];
}

type ArabicForms = "isolated" | "final" | "initial" | "medial";

export function getGlyphs(config_path: string[]): string[] {
  const path_dict = generatePathDict(config_path);
  switch (path_dict.alphabet) {
    case "kana":
      switch (path_dict.type) {
        case "hiragana":
          return processKana(path_dict.glyphs);
        case "katakana":
          return processKana(path_dict.glyphs).map((kana) => toKatakana(kana));
        default:
          return [];
      }
    case "greek":
      switch (path_dict.mode) {
        case "transcriptions":
          switch (path_dict.glyphs) {
            case "monographs":
              switch (path_dict.case) {
                case "upper":
                  return greek.upper_monographs;
                case "lower":
                  return greek.lower_monographs;
                default:
                  return [];
              }
            case "digraphs":
              switch (path_dict.case) {
                case "upper":
                  return [...greek.upper_monographs, ...greek.digraphs].map(
                    (glyph) => glyph.toUpperCase()
                  );
                case "lower":
                  return [...greek.lower_monographs, ...greek.digraphs];
                default:
                  return [];
              }
            default:
              return [];
          }

        case "names":
          switch (path_dict.case) {
            case "upper":
              return greek.upper_monographs;
            case "lower":
              return greek.lower_monographs;
            default:
              return [];
          }
        default:
          return [];
      }
    case "cyrillic": {
      const language =
        cyrillic.languages[
          path_dict.language as keyof typeof cyrillic.languages
        ];

      switch (path_dict.case) {
        case "upper":
          return language.map((glyph) => glyph.toUpperCase());
        case "lower":
          return language;
        default:
          return [];
      }
    }
    case "persoarabic":
      const language =
        persoarabic.languages[
          path_dict.language as keyof typeof persoarabic.languages
        ];

      return language.map(
        (glyph) =>
          arabic_forms[glyph as keyof typeof arabic_forms][
            path_dict.form as ArabicForms
          ]
      );
    case "hangul":
      switch (path_dict.glyphs) {
        case "vowels":
          return hangul.glyphs.vowels;
        case "consonants":
          switch (path_dict.position) {
            case "choseong":
              return hangul.glyphs.initial_consonants;
            case "batchim":
              return hangul.glyphs.final_consonants;
            default:
              return [];
          }
        case "syllables": {
          const count = parseInt(path_dict.count);
          if (!isNaN(count) && count > 0) {
            const unique_syllables: Set<string> = new Set();
            while (unique_syllables.size < count)
              unique_syllables.add(generateRandomHangulWeighted()); // Only adds if unique
            return Array.from(unique_syllables) as string[];
          }
          return [];
        }
        default:
          return [];
      }
    default:
      return [];
  }
}

export const dictionary = derived(game_config, ($config) => {
  if (!$config.is_valid) return [];
  return getGlyphs($config.path);
});
