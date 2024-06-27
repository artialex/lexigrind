import debug from 'debug';
import { retext } from 'retext';
import retextSmartypants from 'retext-smartypants';

import { Compromise } from '@/utils/compromise.ts';

import ThreeWorker from './Tokenizer/compromise/three.worker?worker';

const processor = retext().use(retextSmartypants);
const trace = debug('lexigrind:texts');

export class Texts {
  /**
   * Applies various text normalizations
   * some are from smartyPants, some are custom
   *
   * Intended to use at source submission phase
   */
  static async normalize(text: string) {
    const processed = await processor.process(text);

    return String(processed.value) //
      .replaceAll(/(\w)—/g, '$1 —')
      .replaceAll(/—(\w)/g, '— $1');
  }

  static async getTextStats(text: string): Promise<Lexi.TextStats> {
    return new Promise((resolve) => {
      const worker = new ThreeWorker();
      const paragraphCount = text.split('\n\n').length;
      worker.postMessage(text);

      worker.onmessage = (e) => {
        const data = {
          sentenceCount: Compromise.getSentenceCount(e.data),
          wordCount: Compromise.getWordCount(e.data),
          uniqueWords: Compromise.getUniqueWords(e.data),
        };

        resolve({ ...data, paragraphCount });

        trace('tokenize', 'ended');
        worker.terminate();
      };
    });
  }

  async tokenize() {}

  static async normalizeNStats(text: string) {
    return await Texts.getTextStats(await Texts.normalize(text));
  }

  /**
   * Simple capitalization
   *
   * @param text
   */
  public static capitalize(text: string) {
    return text[0].toUpperCase() + text.slice(1);
  }
}
