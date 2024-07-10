import { describe, it, expect } from 'vitest';

import { FragmentStore } from '@/modules/reading/stores/FragmentStore.ts';
import { TextStatsStore } from '@/modules/stats/TextStatsStore.ts';

const fragment: Lexi.Fragment = {
  _id: '1',
  title: 'Fragment Title',
  content: `
1st paragraph

2nd paragraph
`.trim(),
  stats: TextStatsStore.of(),
};

describe('FragmentStore', () => {
  it('should work', () => {
    const store = FragmentStore.of(fragment);

    expect(store.paragraphs).toMatchObject([
      { paragraph: '1st paragraph' },
      { paragraph: '2nd paragraph' },
    ]);
  });
});
