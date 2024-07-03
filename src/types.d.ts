declare module Lexi {
  type TermLevel = '0' | '1' | '2' | '3' | '4' | '5' | 'ignored' | 'unidentified';
  type ParagraphLevel = '0' | '1' | '2' | '3' | '4' | '5' | 'unidentified';

  interface SharedNote {
    _id: string;
    title: string;
    text: string;
  }
  interface Term {
    id: string;
    level: TermLevel;
    notes?: string;
    sharedNotes?: string[];
  }

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

  interface PersonaStats {
    '0': number;
    '1': number;
    '2': number;
    '3': number;
    '4': number;
    '5': number;
    unidentified: number;
  }

  interface Fragment {
    id: string;
    title: string;
    content: string;
    stats: Lexi.TextStats;
  }

  interface Source {
    id: string;
    title: string;
    author: string;
    tags: string[];
    fragments: Fragment[];
    stats: Lexi.TextStats;
  }

  type RouterParams = Record<'sourceId' | 'fragmentId' | 'termId', string>;
}
