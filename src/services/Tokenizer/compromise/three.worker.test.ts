import { describe, expect, it } from 'vitest';

import ThreeWorker from './three.worker?worker';

describe('three.worker', () => {
  it('should work', async () => {
    const worker = new ThreeWorker();

    worker.postMessage('Simple stuff');

    const data = await new Promise((resolve) => {
      worker.onmessage = (e) => {
        console.log('three.worker.test :: 13', e);
        resolve(e.data);
      };
    });

    console.log('three.worker.test :: 21', data);
    expect(data).toBe('kek');
  });
});
