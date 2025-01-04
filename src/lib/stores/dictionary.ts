import { derived } from "svelte/store";
import { toKatakana } from "wanakana";
import { game_config } from "./game-config";
import { hiragana, greek, cyrillic, persoarabic } from "$/lib/glyph-database";
import { arabic_forms } from "$lib/utils";

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
  switch (config_path[0]) {
    case "kana":
      switch (config_path[1]) {
        case "hiragana":
          return processKana(config_path[2]);
        case "katakana":
          return processKana(config_path[2]).map((kana) => toKatakana(kana));
        default:
          return [];
      }
    case "greek":
      switch (config_path[1]) {
        case "transcriptions":
          switch (config_path[2]) {
            case "monographs":
              switch (config_path[3]) {
                case "upper":
                  return greek.upper_monographs;
                case "lower":
                  return greek.lower_monographs;
                default:
                  return [];
              }
            case "digraphs":
              switch (config_path[3]) {
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
          switch (config_path[2]) {
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
    case "cyrillic":
      switch (config_path[1]) {
        case "bulgarian": {
          const alphabet = cyrillic.bg_lower;
          switch (config_path[2]) {
            case "upper":
              return alphabet.map((glyph) => glyph.toUpperCase());
            case "lower":
              return alphabet;
            default:
              return [];
          }
        }
        case "russian": {
          const alphabet = cyrillic.ru_lower;
          switch (config_path[2]) {
            case "upper":
              return alphabet.map((glyph) => glyph.toUpperCase());
            case "lower":
              return alphabet;
            default:
              return [];
          }
        }
        case "serbian": {
          const alphabet = cyrillic.sr_lower;
          switch (config_path[2]) {
            case "upper":
              return alphabet.map((glyph) => glyph.toUpperCase());
            case "lower":
              return alphabet;
            default:
              return [];
          }
        }
        default:
          return [];
      }
    case "persoarabic":
      switch (config_path[1]) {
        case "arabic":
          switch (config_path[4]) {
            case "all":
              return persoarabic.arabic.flatMap((glyph) => {
                const forms = arabic_forms[glyph as keyof typeof arabic_forms];
                return forms
                  ? ["isolated", "initial", "medial", "final"].map(
                      (form) => forms[form as ArabicForms]
                    )
                  : [];
              });
            default:
              return persoarabic.arabic.map(
                (glyph) =>
                  arabic_forms[glyph as keyof typeof arabic_forms][
                    config_path[4] as ArabicForms
                  ]
              );
          }
        default:
          switch (config_path[3]) {
            case "all":
              return (
                persoarabic[
                  config_path[1] as keyof typeof persoarabic
                ] as string[]
              ).flatMap((glyph) => {
                const forms = arabic_forms[glyph as keyof typeof arabic_forms];
                return forms
                  ? ["isolated", "initial", "medial", "final"].map(
                      (form) => forms[form as ArabicForms]
                    )
                  : [];
              });
            default:
              return (
                persoarabic[
                  config_path[1] as keyof typeof persoarabic
                ] as string[]
              ).map(
                (glyph) =>
                  arabic_forms[glyph as keyof typeof arabic_forms][
                    config_path[3] as ArabicForms
                  ]
              );
          }
      }

    default:
      return [];
  }
}

export const dictionary = derived(game_config, ($config) => {
  if (!$config.is_valid) return [];
  return getGlyphs($config.path);
});
