import { describe, expect, it } from 'vitest';

import ThreeWorker from './three.worker.ts?worker';

describe('three.worker', () => {
  it('should work', async () => {
    const worker = new ThreeWorker();

    worker.postMessage('Simple stuff');

    const data = await new Promise((resolve) => {
      worker.onmessage = (e) => {
        resolve(e.data);
      };
    });

    expect(data).toEqual({
      paragraphCount: 1,
      sentenceCount: 1,
      uniqueWords: ['simple', 'stuff'],
      wordCount: 2,
    });
  });
});
