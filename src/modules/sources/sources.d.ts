declare module Lexi {
  interface Source {
    _id: string;
    title: string;
    author: string;
    tags: string[];
    // link: string;
    // audio: string;
    fragments: Fragment[];
    stats: Lexi.TextStats;
  }

  interface Fragment {
    _id: string;
    title: string;
    content: string;
    stats: Lexi.TextStats;
  }
}
