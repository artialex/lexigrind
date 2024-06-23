/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineWebWorkers } from '@vitest/web-worker/pure';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

if (process.env.SUPPORT_WORKERS) defineWebWorkers({ clone: 'ponyfill' });

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  test: {
    setupFiles: ['@vitest/web-worker'],
  },
});
