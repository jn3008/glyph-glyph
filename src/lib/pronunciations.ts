import { game_config } from "$lib/stores/game-config";
import {
  hiragana,
  greek,
  cyrillic,
  persoarabic,
  indic,
} from "$/lib/glyph-database";
import { toHiragana } from "wanakana";
import { get } from "svelte/store";
import { getIsolatedForm } from "$/lib/answer";
import { classifyIndic, cross, withVowel, readAddak } from "./utils";

// Format pronunciations:
// example input: ['x1', 'y1', 'z1', ..., 'xn', 'yn', 'zn']
// output: 'y1 as in x1y1z1 ... yn as in xnynzn'
function formatPronunciations(glyph: string, pronunciations: string[]): string {
  if (!pronunciations) return "";
  if (pronunciations[1] === '' && pronunciations[2] === '') return pronunciations.join(" ");

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
    case "indic": {
      const language = path[1] as keyof typeof indic.pronunciations;
      const category = indic.languages[language].vowels.includes(glyph) ? "vowels" : "consonants";
      const dict = indic.pronunciations[language][category];
      return formatPronunciations(
        glyph,
        dict[glyph as keyof typeof dict],
      );
    }
    default:
      return "";
  }
}

// Join IPA pronuncations with square brackets around each one
function formatIPA(sounds: string[]): string {
  const uniqueSounds = new Set(sounds.map(sound => sound.normalize("NFC")));
  return [...uniqueSounds].map(sound => `[${sound}]`).join(" ");
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
            ],
          );
        }
        default:
          return formatIPA(
            sounds[getIsolatedForm(glyph) as keyof typeof sounds]
          );
      }
    }
    case "indic": {
      const language_obj =
        indic.languages[path_dict.language as keyof typeof indic.languages];
      const sounds_obj =
        indic.sounds[path_dict.language as keyof typeof indic.sounds];
      const sounds_obj_full = {
        ...sounds_obj.vowels,
        ...sounds_obj.consonants,
      };
      const toneFor = (letter: string): string => {
        if (path_dict.language !== "punjabi") return "";
        const tones = indic.sounds.punjabi.word_initial_tones;
        return tones[letter as keyof typeof tones] ?? "";
      };
      // Attach tone to the vowel itself, before length/nasalisation marks.
      const vowelWithTone = (vowel: string, tone: string): string =>
        vowel.slice(0, 1) + tone + vowel.slice(1);

      switch (classifyIndic(path_dict.language, glyph)) {
        case "letter":
          if (glyph in sounds_obj.consonants) {
            const sounds: string[] = sounds_obj_full[glyph as keyof typeof sounds_obj_full];
            const tone = toneFor(glyph);
            return formatIPA(
              tone
                ? sounds.map(sound => sound + vowelWithTone("ə", tone))
                : withVowel(sounds, "ə"),
            );
          }
          return formatIPA(
            sounds_obj_full[glyph as keyof typeof sounds_obj_full],
          );
        case "syllable": {
          if (path_dict.language === "punjabi" && glyph.includes('ੱ')) {
            return formatIPA(readAddak(glyph, indic.sounds.punjabi.consonants, true));
          }
          const matra = language_obj.matras.find((value) =>
            glyph.endsWith(value),
          );
          if (!matra) return "";

          const matra_sound =
            sounds_obj.matras[matra as keyof typeof sounds_obj.matras];
          const letter = glyph.slice(0, -matra.length);
          const letter_sounds =
            sounds_obj_full[letter as keyof typeof sounds_obj_full];

          return formatIPA(
            (letter_sounds as string[]).map((sound) =>
              sound + vowelWithTone(matra_sound[0], toneFor(letter))),
          );
        }
        case "conjunct": {
          const [left, right] = glyph.split(language_obj.virama);
          if (!right) return "";

          const left_sounds: string[] =
            sounds_obj.consonants[left as keyof typeof sounds_obj.consonants];
          const tone = toneFor(left);
          if (tone) {
            const right_sounds = sounds_obj.consonants[right as keyof typeof sounds_obj.consonants];
            return formatIPA(cross(left_sounds, right_sounds)
              .map(sound => sound + vowelWithTone("ə", tone)));
          }
          const right_sounds: string[] = withVowel(
            sounds_obj.consonants[right as keyof typeof sounds_obj.consonants],
            "ə",
          );
          return formatIPA(cross(left_sounds, right_sounds));
        }
        default:
          return "";
      }
    }
    default:
      return "";
  }
}
