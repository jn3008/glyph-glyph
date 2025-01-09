export function map(
  value: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
): number {
  return ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

export function lerp(a: number, b: number, t: number): number {
  // Equivalent to map(t, 0, 1, a, b)
  return a + (b - a) * t;
}

export function constrain(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function c01(value: number): number {
  return constrain(value, 0, 1);
}

export function ease(t: number, strength: number = 1): number {
  strength = Math.max(strength, 0.1); // Prevent extremely small or negative values
  return t < 0.5
    ? Math.pow(2 * t, strength) / 2
    : 1 - Math.pow(2 * (1 - t), strength) / 2;
}

export function roundToDecimalPlaces(
  value: number,
  decimalPlaces: number
): number {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(value * factor) / factor;
}

export function formatTime(time: number): string {
  if (time == null || time < 0) return "--:--.-";

  const [whole, fraction] = time.toFixed(1).split("."); // Ensure one decimal place
  const minutes = Math.floor(Number(whole) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (Number(whole) % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}.${fraction}`;
}

export function shuffleArray<T>(array: T[]): T[] {
  const new_array = [...array];
  for (let i = new_array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [new_array[i], new_array[j]] = [new_array[j], new_array[i]];
  }
  return new_array;
}

import { hangul } from "$lib/glyph-database";

export function generateRandomHangul(): string {
  const initial_index = Math.floor(
    Math.random() * hangul.glyphs.initial_consonants.length
  );
  const vowel_index = Math.floor(Math.random() * hangul.glyphs.vowels.length);
  const final_index = Math.floor(
    Math.random() * (hangul.glyphs.final_consonants.length + 1)
  );

  // Calculate the Unicode character using the Hangul formula
  const syllable_code =
    0xac00 + initial_index * 588 + vowel_index * 28 + final_index;
  const symbol: string = String.fromCharCode(syllable_code);
  return symbol;
}

export function getCumulativeDistribution(weights: number[]): number[] {
  const cumulative = [];

  let sum = 0;
  for (let i = 0; i < weights.length; i++) cumulative[i] = sum += weights[i];

  cumulative[weights.length - 1] = 1.0;
  return cumulative;
}

export function chooseWeighted(cumulative_weights: number[]): number {
  // Use binary search
  let low = 0;
  let high = cumulative_weights.length - 1;
  const random_val = Math.random();
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (random_val < cumulative_weights[mid]) high = mid;
    else low = mid + 1;
  }

  return low;
}

let cumulative_initial_consonants = getCumulativeDistribution(
  hangul.weights.initial_consonants
);
let cumulative_vowels = getCumulativeDistribution(hangul.weights.vowels);
let cumulative_final_consonants = getCumulativeDistribution(
  hangul.weights.final_consonants
);

export function generateRandomHangulWeighted(): string {
  const initial_index = chooseWeighted(cumulative_initial_consonants);
  const vowel_index = chooseWeighted(cumulative_vowels);
  const final_index = chooseWeighted(cumulative_final_consonants);

  // Calculate the Unicode character using the Hangul formula
  const syllable_code =
    0xac00 + initial_index * 588 + vowel_index * 28 + final_index;
  const symbol: string = String.fromCharCode(syllable_code);
  return symbol;
}

export const arabic_forms: Record<
  string,
  { isolated: string; initial: string; medial: string; final: string }
> = {
  // Arabic Characters
  ا: { isolated: "ا", initial: "ﺍ", medial: "ﺍ", final: "ﺎ" }, // Alif
  ب: { isolated: "ب", initial: "ﺑ", medial: "ﺒ", final: "ﺐ" }, // Ba
  ت: { isolated: "ت", initial: "ﺗ", medial: "ﺘ", final: "ﺖ" }, // Ta
  ث: { isolated: "ث", initial: "ﺛ", medial: "ﺜ", final: "ﺚ" }, // Tha
  ج: { isolated: "ج", initial: "ﺟ", medial: "ﺠ", final: "ﺞ" }, // Jeem
  ح: { isolated: "ح", initial: "ﺣ", medial: "ﺤ", final: "ﺢ" }, // Hha
  خ: { isolated: "خ", initial: "ﺧ", medial: "ﺨ", final: "ﺦ" }, // Kha
  د: { isolated: "د", initial: "ﺩ", medial: "ﺩ", final: "ﺪ" }, // Dal
  ذ: { isolated: "ذ", initial: "ﺫ", medial: "ﺫ", final: "ﺬ" }, // Thal
  ر: { isolated: "ر", initial: "ﺭ", medial: "ﺭ", final: "ﺮ" }, // Ra
  ز: { isolated: "ز", initial: "ﺯ", medial: "ﺯ", final: "ﺰ" }, // Zay
  س: { isolated: "س", initial: "ﺳ", medial: "ﺴ", final: "ﺲ" }, // Seen
  ش: { isolated: "ش", initial: "ﺷ", medial: "ﺸ", final: "ﺶ" }, // Sheen
  ص: { isolated: "ص", initial: "ﺻ", medial: "ﺼ", final: "ﺺ" }, // Sad
  ض: { isolated: "ض", initial: "ﺿ", medial: "ﻀ", final: "ﺾ" }, // Dad
  ط: { isolated: "ط", initial: "ﻃ", medial: "ﻄ", final: "ﻂ" }, // Ta
  ظ: { isolated: "ظ", initial: "ﻇ", medial: "ﻈ", final: "ﻆ" }, // Dha
  ع: { isolated: "ع", initial: "ﻋ", medial: "ﻌ", final: "ﻊ" }, // Ain
  غ: { isolated: "غ", initial: "ﻏ", medial: "ﻐ", final: "ﻎ" }, // Ghain
  ف: { isolated: "ف", initial: "ﻓ", medial: "ﻔ", final: "ﻒ" }, // Fa
  ق: { isolated: "ق", initial: "ﻗ", medial: "ﻘ", final: "ﻖ" }, // Qaf
  ك: { isolated: "ك", initial: "ﻛ", medial: "ﻜ", final: "ﻚ" }, // Kaf
  ل: { isolated: "ل", initial: "ﻟ", medial: "ﻠ", final: "ﻞ" }, // Lam
  م: { isolated: "م", initial: "ﻣ", medial: "ﻤ", final: "ﻢ" }, // Meem
  ن: { isolated: "ن", initial: "ﻧ", medial: "ﻨ", final: "ﻦ" }, // Noon
  ه: { isolated: "ه", initial: "ﻫ", medial: "ﻬ", final: "ﻪ" }, // Ha
  و: { isolated: "و", initial: "ﻮ", medial: "ﻮ", final: "ﻮ" }, // Waw
  ي: { isolated: "ي", initial: "ﻳ", medial: "ﻴ", final: "ﻲ" }, // Ya

  // Persian-Specific Characters
  پ: { isolated: "پ", initial: "ﭘ", medial: "ﭙ", final: "ﭗ" }, // Peh
  چ: { isolated: "چ", initial: "ﭼ", medial: "ﭽ", final: "ﭻ" }, // Cheh
  ژ: { isolated: "ژ", initial: "ﮋ", medial: "ﮋ", final: "ﮋ" }, // Jeh
  گ: { isolated: "گ", initial: "ﮔ", medial: "ﮕ", final: "ﮓ" }, // Gaf

  // Urdu-Specific Characters
  ٹ: { isolated: "ٹ", initial: "ﭨ", medial: "ﭩ", final: "ﭧ" }, // Tteh
  ڈ: { isolated: "ڈ", initial: "ﭰ", medial: "ﭱ", final: "ﭯ" }, // Ddal
  ڑ: { isolated: "ڑ", initial: "ﭴ", medial: "ﭵ", final: "ﭳ" }, // Rreh
  ں: { isolated: "ں", initial: "ں", medial: "ں", final: "ں" }, // Noon Ghunnah
  ھ: { isolated: "ھ", initial: "ﮬ", medial: "ﮭ", final: "ﮫ" }, // Do Chashmi He
  ہ: { isolated: "ہ", initial: "ﮨ", medial: "ﮩ", final: "ﮧ" }, // Heh Goal
  ے: { isolated: "ے", initial: "ﮯ", medial: "ﮮ", final: "ﮯ" }, // Bari Yeh
  ی: { isolated: "ی", initial: "ﯾ", medial: "ﯿ", final: "ﯽ" }, // Farsi Yeh
  ک: { isolated: "ک", initial: "ﮐ", medial: "ﮑ", final: "ﮏ" }, // Keheh
  ء: { isolated: "ء", initial: "ء", medial: "ء", final: "ء" }, // Hamza
};
