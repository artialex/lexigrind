import { describe, it, expect } from 'vitest';

import { Texts } from './Texts.service.ts';

describe('Texts', () => {
  describe('.normalize()', () => {
    it.each([
      ['first—second', 'first — second'],
      ['first— second', 'first — second'],
      ['first —second', 'first — second'],
      ['first  —second', 'first  — second'],
      ['first—  second', 'first —  second'],
      ['first.second', 'first. second'],
      ['first?second', 'first? second'],
      ['first!second', 'first! second'],
      ['first...second', 'first… second'],
      ['first ... second', 'first… second'],
      ['first…second', 'first… second'],
      ['first … second', 'first… second'],
    ])('should normalize text', async (raw, expected) => {
      expect(await Texts.normalize(raw)).toBe(expected);
    });
  });
});
