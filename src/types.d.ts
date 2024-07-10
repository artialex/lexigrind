declare module Lexi {
  interface Token {
    pre: string;
    text: string;
    post: string;
    tags: string[];
  }

  interface TextStats {
    chapterCount?: number;
    paragraphCount: number;
    sentenceCount: number;
    wordCount: number;
    uniqueWords: string[];
  }
}
