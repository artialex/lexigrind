import { describe, expect, it } from 'vitest';

import ThreeWorker from './three.worker?worker';

describe('three.worker', () => {
  it('should work', async () => {
    const worker = new ThreeWorker();

    worker.postMessage('Simple stuff');

    const data = await new Promise((resolve) => {
      worker.onmessage = (e) => {
        resolve(e.data);
      };
    });

    expect(data).toBe('kek');
  });
});
