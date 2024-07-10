import three from 'compromise';

import { Compromise } from '../compromise.ts';

self.onmessage = (e) => {
  const view = three(e.data);
  const paragraphCount = e.data.split('\n\n').length;

  self.postMessage({
    paragraphCount,
    sentenceCount: Compromise.getSentenceCount(view),
    wordCount: Compromise.getWordCount(view),
    uniqueWords: Compromise.getUniqueWords(view),
  });
};
