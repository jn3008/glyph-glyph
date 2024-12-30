import { game_config } from "$lib/stores/game-config";
import { greek, cyrillic } from "$/lib/glyph-database";
import { get } from "svelte/store";
import { isSilent } from "$/lib/answer";

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
  switch (get(game_config)?.path[0]) {
    case "greek":
      return formatPronunciations(
        glyph.toLowerCase(),
        greek.pronunciations[
          glyph.toLowerCase() as keyof typeof greek.pronunciations
        ]
      );
    case "cyrillic":
      switch (get(game_config).path[1]) {
        case "bulgarian":
          return formatPronunciations(
            glyph.toLowerCase(),
            cyrillic.bg_pronunciations[
              glyph.toLowerCase() as keyof typeof cyrillic.bg_pronunciations
            ]
          );
        case "russian":
          return formatPronunciations(
            glyph.toLowerCase(),
            cyrillic.ru_pronunciations[
              glyph.toLowerCase() as keyof typeof cyrillic.ru_pronunciations
            ]
          );
        case "serbian":
          return formatPronunciations(
            glyph.toLowerCase(),
            cyrillic.sr_pronunciations[
              glyph.toLowerCase() as keyof typeof cyrillic.sr_pronunciations
            ]
          );
        default:
          return "";
      }
    default:
      return "";
  }
}
