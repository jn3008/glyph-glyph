import { game_config } from "$lib/stores/game-config";
import { hiragana, greek, cyrillic, persoarabic } from "$/lib/glyph-database";
import { toHiragana } from "wanakana";
import { get } from "svelte/store";
import { isSilent, getIsolatedForm } from "$/lib/answer";

// Format pronunciations:
// example input: ['x1', 'y1', 'z1', ..., 'xn', 'yn', 'zn']
// output: 'y1 as in x1y1z1 ... yn as in xnynzn'
function formatPronunciations(glyph: string, pronunciations: string[]): string {
  if (!pronunciations) return "";

  if (isSilent(glyph)) return pronunciations.join(" ");

  const n_pronunciations = pronunciations.length / 3;
  let formatted_parts: string[] = [];

  for (let i = 0; i < n_pronunciations; i++) {
    const x = pronunciations[i * 3];
    const y = pronunciations[i * 3 + 1];
    const z = pronunciations[i * 3 + 2];
    formatted_parts.push(`<b>${y}</b> as in ${x}<b>${y}</b>${z}`); // Add bold markers in html
  }

  return formatted_parts.join(" ");
}

export function getPronunciations(glyph: string): string {
  const path = get(game_config)?.path;
  switch (path[0]) {
    case "greek":
      return formatPronunciations(
        glyph.toLowerCase(),
        greek.pronunciations[
          glyph.toLowerCase() as keyof typeof greek.pronunciations
        ]
      );
    case "cyrillic": {
      const dict =
        cyrillic.pronunciations[
          path[1] as keyof typeof cyrillic.pronunciations
        ];
      return formatPronunciations(
        glyph.toLowerCase(),
        dict[glyph.toLowerCase() as keyof typeof dict]
      );
    }
    default:
      return "";
  }
}

// Join IPA pronuncations with square brackets around each one
function formatIPA(sounds: string[]): string {
  let formatted_parts: string[] = [];

  for (let i = 0; i < sounds.length; i++)
    formatted_parts.push(`[${sounds[i]}]`);

  return formatted_parts.join(" ");
}

export function getIPA(glyph: string): string {
  const path_dict = get(game_config)?.path_dict;
  // const path = get(game_config)?.path;
  switch (path_dict.alphabet) {
    case "kana":
      return formatIPA(
        hiragana.sounds[toHiragana(glyph) as keyof typeof hiragana.sounds]
      );
    case "greek":
      return formatIPA(
        greek.sounds[glyph.toLowerCase() as keyof typeof greek.sounds]
      );
    case "cyrillic": {
      const sounds =
        cyrillic.sounds[
          path_dict.language as keyof typeof cyrillic.pronunciations
        ];
      return formatIPA(sounds[glyph.toLowerCase() as keyof typeof sounds]);
    }
    case "persoarabic": {
      const sounds =
        persoarabic.sounds[
          path_dict.language as keyof typeof persoarabic.sounds
        ];

      switch (path_dict.language) {
        case "arabic": {
          const sounds_regional =
            sounds[path_dict.pronunciation as keyof typeof sounds];
          return formatIPA(
            sounds_regional[
              getIsolatedForm(glyph) as keyof typeof sounds_regional
            ]
          );
        }
        default:
          return formatIPA(
            sounds[getIsolatedForm(glyph) as keyof typeof sounds]
          );
      }
    }
    default:
      return "";
  }
}
