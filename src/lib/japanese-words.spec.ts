import { describe, expect, it } from "vitest";
import { toRomaji } from "wanakana";
import importedWords from "$lib/data/japanese-words-jmdict.json";
import { japaneseWords } from "$lib/japanese-words";
import { getGlyphs } from "$lib/stores/glyphs";
import { updateGameConfig } from "$lib/stores/game-config";
import { getAnswers, isCorrectAnswer } from "$lib/answer";
import { getIPA } from "$lib/pronunciations";
import { full_keys } from "$lib/glyph-configurations";

describe("Japanese word mode", () => {
  for (const script of ["hiragana", "katakana"] as const) {
    for (const count of [20, 50]) {
      it(`selects ${count} unique ${script} words with accepted answers`, () => {
        const id = `kana-${script}-words${count}`;
        expect(full_keys).toContain(id);
        updateGameConfig(id);
        const words = getGlyphs(id.split("-"));
        expect(words).toHaveLength(count);
        expect(new Set(words).size).toBe(count);
        for (const word of words) {
          expect(getAnswers(word).length).toBeGreaterThan(0);
          for (const answer of getAnswers(word)) {
            expect(isCorrectAnswer(answer, word)).toBe(true);
          }
          expect(getIPA(word)).toBe("");
        }
        expect(isCorrectAnswer("wrong", words[0])).toBe(false);
      });
    }
    it(`has at least 300 usable ${script} words with literal romanizations first`, () => {
      updateGameConfig(`kana-${script}-words50`);
      expect(japaneseWords[script].length).toBeGreaterThanOrEqual(300);
      for (const entry of japaneseWords[script]) {
        expect(entry.answers[0]).toMatch(/^[a-z'-]+$/);
        expect(isCorrectAnswer(toRomaji(entry.word), entry.word)).toBe(true);
        for (const answer of entry.answers) {
          expect(isCorrectAnswer(answer.toUpperCase(), entry.word)).toBe(true);
        }
      }
      for (const entry of importedWords.words[script]) {
        expect(entry.jmdictId).toMatch(/^\d+$/);
        for (const meaning of "translations" in entry
          ? entry.translations
          : []) {
          expect(isCorrectAnswer(meaning, entry.word)).toBe(true);
        }
      }
    });
    it(`has no duplicate ${script} dictionary entries`, () => {
      expect(
        new Set(japaneseWords[script].map((entry) => entry.word)).size,
      ).toBe(japaneseWords[script].length);
    });
  }
  it("accepts loanword counterparts and preserves character mode", () => {
    updateGameConfig("kana-katakana-words20");
    expect(isCorrectAnswer("COFFEE", "コーヒー")).toBe(true);
    expect(isCorrectAnswer("chocolat", "チョコレート")).toBe(true);
    expect(isCorrectAnswer("  ICE   CREAM  ", "アイスクリーム")).toBe(true);
    expect(getAnswers("アイスクリーム")[0]).toBe("aisukuriimu");
    updateGameConfig("kana-hiragana-words20");
    expect(isCorrectAnswer("cat", "ねこ")).toBe(false);
    expect(isCorrectAnswer("neko", "ねこ")).toBe(true);
    expect(isCorrectAnswer("dog", "いぬ")).toBe(false);
    expect(isCorrectAnswer("inu", "いぬ")).toBe(true);
    expect(isCorrectAnswer("tuki", "つき")).toBe(true);
    expect(getAnswers("ねこ")[0]).toBe("neko");
    updateGameConfig("kana-katakana-monographs");
    expect(isCorrectAnswer("shi", "シ")).toBe(true);
    expect(getGlyphs(["kana", "katakana", "monographs"])).toContain("シ");
  });
});
