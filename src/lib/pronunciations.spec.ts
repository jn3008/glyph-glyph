import { describe, expect, it } from 'vitest';
import { updateGameConfig } from './stores/game-config';
import { getIPA } from './pronunciations';

describe('IPA display', () => {
  it('shows each tonal consonant reading once', () => {
    updateGameConfig('indic-punjabi-letters');
    for (const glyph of ['ਘ', 'ਝ', 'ਢ', 'ਧ', 'ਭ']) {
      const readings = getIPA(glyph).match(/\[[^\]]+\]/g);
      expect(readings).toHaveLength(1);
    }
    expect(getIPA('ਧ')).toBe('[t̪ə̀]'.normalize('NFC'));
  });

  it('keeps distinct consonant readings with and without the inherent vowel', () => {
    updateGameConfig('indic-punjabi-letters');
    expect(getIPA('ਕ')).toBe('[k] [kə]');
  });

  it.each([
    ['ਘਾ', '[kàː]'],
    ['ਝੀ', '[t͡ʃìː]'],
    ['ਢੇ', '[ʈèː]'],
    ['ਧੀ', '[t̪ìː]'],
    ['ਭੁ', '[pʊ̀]'],
  ])('uses only the matra vowel with tone for %s', (glyph, expected) => {
    updateGameConfig('indic-punjabi-syllables-20');
    expect(getIPA(glyph)).toBe(expected.normalize('NFC'));
  });

  it.each([
    ['ਘ੍ਰ', '[kɾə̀]'],
    ['ਧ੍ਵ', '[t̪ʋə̀]'],
  ])('places the toned vowel after the whole conjunct %s', (glyph, expected) => {
    updateGameConfig('indic-punjabi-conjuncts-20');
    expect(getIPA(glyph)).toBe(expected.normalize('NFC'));
  });

  it('keeps untoned syllables and conjuncts unchanged', () => {
    updateGameConfig('indic-punjabi-syllables-20');
    expect(getIPA('ਕੀ')).toBe('[kiː]');
    expect(getIPA('ਕ੍ਰ')).toBe('[kɾ] [kɾə]');
    expect(getIPA('◌ੱਕ')).toBe('[kː]');
  });

  it('preserves distinct pronunciations in other scripts', () => {
    updateGameConfig('indic-hindi-letters');
    expect(getIPA('क')).toBe('[k] [kə]');
  });
});
