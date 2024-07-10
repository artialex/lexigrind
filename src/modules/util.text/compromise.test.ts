import { describe, expect, it } from 'vitest';

import { compromiseThree } from '@/modules/util.text/compromise/three.ts';

import { Compromise } from './compromise.ts';

describe('Compromise', () => {
  describe('.getUniqueWords()', () => {
    it.each([
      [
        "His sister's laptop and his sister's tablet", //
        ['his', 'sister', 'laptop', 'and', 'tablet'],
      ],
    ])('should return unique words for a sentence "%s"', (sentence, uniqueWords) => {
      const view = compromiseThree(sentence);

      expect(Compromise.getUniqueWords(view)).toEqual(uniqueWords);
    });
  });

  describe('.getTokens()', () => {
    it.each([
      [
        '“What’s gone with that boy, I wonder? You TOM!”',
        [
          { pre: '“', text: 'What’s', post: ' ' },
          { pre: '', text: 'gone', post: ' ' },
          { pre: '', text: 'with', post: ' ' },
          { pre: '', text: 'that', post: ' ' },
          { pre: '', text: 'boy', post: ', ' },
          { pre: '', text: 'I', post: ' ' },
          { pre: '', text: 'wonder', post: '? ' },
          { pre: '', text: 'You', post: ' ' },
          { pre: '', text: 'TOM', post: '!”' },
        ],
      ],
      [
        '“Well, I lay if I get hold of you I’ll —”',
        [
          { pre: '“', text: 'Well', post: ', ' },
          { pre: '', text: 'I', post: ' ' },
          { pre: '', text: 'lay', post: ' ' },
          { pre: '', text: 'if', post: ' ' },
          { pre: '', text: 'I', post: ' ' },
          { pre: '', text: 'get', post: ' ' },
          { pre: '', text: 'hold', post: ' ' },
          { pre: '', text: 'of', post: ' ' },
          { pre: '', text: 'you', post: ' ' },
          { pre: '', text: 'I’ll', post: ' —”' },
        ],
      ],
      [
        "It was his sister's laptop.",
        [
          { pre: '', text: 'It', post: ' ' },
          { pre: '', text: 'was', post: ' ' },
          { pre: '', text: 'his', post: ' ' },
          { pre: '', text: 'sister', post: "'s " },
          { pre: '', text: 'laptop', post: '.' },
        ],
      ],
      [
        'Spaced   sentence   ',
        [
          { pre: '', text: 'Spaced', post: '   ' },
          { pre: '', text: 'sentence', post: '   ' },
        ],
      ],
    ])('should correctly tokenize a sentence "%s"', (sentence, tokens) => {
      const view = compromiseThree(sentence);

      expect(Compromise.getTokens(view)).toMatchObject(tokens);
    });
  });
});
