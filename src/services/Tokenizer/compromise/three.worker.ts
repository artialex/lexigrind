import three from 'compromise';

import { Compromise } from '@/utils/compromise.ts';

self.onmessage = (e) => {
  const view = three(e.data);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  const paragraphs = e.data.split('\n\n');

  const data = {
    paragraphCount: paragraphs.length,
    sentenceCount: Compromise.getSentenceCount(view),
    wordCount: Compromise.getWordCount(view),
    uniqueWords: Compromise.getUniqueWords(view),
  };

  self.postMessage(data);
};
