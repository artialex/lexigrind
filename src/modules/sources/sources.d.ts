declare module Lexi {
  interface Fragment {
    _id: string;
    title: string;
    content: string;
    stats: Lexi.TextStats;
  }
  interface Source {
    _id: string;
    title: string;
    author: string;
    tags: string[];
    fragments: Fragment[];
    stats: Lexi.TextStats;
  }

  // +link
  // +audio
}
