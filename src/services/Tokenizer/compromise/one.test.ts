import { describe, it, expect } from 'vitest';

import { compromiseOne } from './one.ts';

describe('one', () => {
  it.each([
    // ["It's necessary", 2],
    // ["His sister's laptop and his sister's tablet", 7],
    ['“Well, I lay if I get hold of you I’ll —”', 10],
  ])('should work %s', (sentence, length) => {
    const tokenized = compromiseOne(sentence);
    const json = tokenized
      .terms()
      .json()
      .flatMap((_) => _.terms);

    console.log('one.test :: 13', json);

    expect(json).toHaveLength(length);
  });
});
