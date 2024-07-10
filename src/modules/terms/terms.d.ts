declare module Lexi {
  type Level = '0' | '1' | '2' | '3' | '4' | '5' | 'ignored' | 'unidentified';

  interface SharedNote {
    _id: string;
    title: string;
    text: string;
  }
  interface Term {
    _id: string;
    level: Level;
    notes?: string;
    sharedNotes?: string[];
  }

  type TermsRouterParams = 'termId';
}
