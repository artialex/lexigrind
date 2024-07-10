import { describe, it, expect } from 'vitest';

import { ParagraphStore } from '@/modules/reading/stores/ParagraphStore.ts';

describe('FragmentStore', () => {
  it('should collect words [when] initialized with a string', () => {
    const store = ParagraphStore.of('Simple paragraph.');

    expect(store.words).toMatchObject(['simple', 'paragraph']);
  });

  it('should form up tokens [when] initialized with a string', () => {
    const store = ParagraphStore.of('Simple paragraph.');

    expect(store.tokens).toMatchObject([
      { token: { pre: '', text: 'Simple', post: ' ' } },
      { token: { pre: '', text: 'paragraph', post: '.' } },
    ]);
  });

  it('should detect the level [when] initialized with a string', () => {
    const store = ParagraphStore.of('Simple paragraph.');

    expect(store.level).toBe('unidentified');
  });
});
