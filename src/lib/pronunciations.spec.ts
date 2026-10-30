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

  it('preserves distinct pronunciations in other scripts', () => {
    updateGameConfig('indic-hindi-letters');
    expect(getIPA('क')).toBe('[k] [kə]');
  });
});
