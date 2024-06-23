import { CompromiseOne } from '@/services/Tokenizer/Tokenizer.service.ts';

import { compromiseOne } from './one.ts';

onmessage = (e) => {
  const doc = compromiseOne(e.data);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const paragraphs = doc.paragraphs().json();

  const uniqueWords = (
    doc.terms().unique().toLowerCase().json() as Array<{
      terms: Array<{ text: string }>;
    }>
  )
    .flatMap((_) => _.terms.map((_) => _.text))
    .filter(Boolean);

  const data = {
    paragraphCount: paragraphs.length,
    sentenceCount: doc.length,
    wordCount: doc.wordCount(),
    uniqueWords: uniqueWords,
    uniqueWordCount: uniqueWords.length,
  } satisfies CompromiseOne;

  postMessage(data);
};
