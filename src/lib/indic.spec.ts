import { afterEach, describe, expect, it, vi } from 'vitest';
import { indic } from './glyph-database';
import { generateRandomSyllable, readAddak, romanizeSyllable } from './utils';

afterEach(() => vi.restoreAllMocks());

describe('Gurmukhi addak exercises', () => {
  it('places addak on a dotted circle before the consonant', () => {
    vi.spyOn(Math, 'random')
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(0.99)
      .mockReturnValueOnce(0);
    const glyph = generateRandomSyllable('punjabi');
    expect(glyph).toBe('◌ੱਕ');
    expect(romanizeSyllable('punjabi', glyph)).toEqual(['kk']);
  });

  it('doubles the following consonant rather than the preceding one', () => {
    expect(romanizeSyllable('punjabi', '◌ੱਕ')).toEqual(['kk']);
    expect(romanizeSyllable('punjabi', '◌ੱਪ')).toEqual(['pp']);
    expect(romanizeSyllable('punjabi', 'ਕੱ')).toEqual([]);
  });

  it('lengthens the following consonant in IPA', () => {
    expect(readAddak('◌ੱਕ', indic.sounds.punjabi.consonants, true))
      .toEqual(['kː']);
  });

  it('preserves ordinary vowel-sign readings in both scripts', () => {
    expect(romanizeSyllable('punjabi', 'ਕੀ')).toEqual(['kee']);
    expect(romanizeSyllable('hindi', 'की')).toEqual(['kee']);
  });
});
