import { CompromiseOne } from '@/services/Tokenizer/Tokenizer.service.ts';

import { compromiseThree } from './three.ts';

self.onmessage = (e) => {
  const doc = compromiseThree(e.data);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const paragraphs = e.data.split('\n\n');

  const uniqueWords = (
    doc.terms().unique().toLowerCase().json() as Array<{
      terms: Array<{ text: string; tags: string[] }>;
    }>
  )
    .flatMap((_) =>
      _.terms.map((_) => {
        const found = _.text.match(/['’]/);

        if (_.tags.includes('Possessive') && found) {
          const [text] = _.text.split(/['’]/);
          return text;
        }
        return _.text;
      }),
    )
    .filter(Boolean);

  const data = {
    // paragraphs,
    paragraphCount: paragraphs.length,
    sentenceCount: doc.length,
    wordCount: doc.wordCount(),
    uniqueWords: uniqueWords,
    uniqueWordCount: uniqueWords.length,
  } satisfies CompromiseOne;

  self.postMessage(data);
};
