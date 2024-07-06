import { makeAutoObservable } from 'mobx';

import { ParagraphStore } from '@/stores/ParagraphStore.ts';

export class FragmentStore {
  static of(fragment: Lexi.Fragment) {
    return new FragmentStore(fragment);
  }

  constructor(private fragment: Lexi.Fragment) {
    makeAutoObservable(this);
  }

  get contents() {
    return this.fragment.content.split('\n\n');
  }

  get paragraphs() {
    return this.contents.map(ParagraphStore.of);
  }

  get wordParagraphMap() {
    const map = new Map<string, Set<ParagraphStore>>();

    this.paragraphs.forEach((p) => {
      p.words.forEach((w) => {
        if (map.has(w)) {
          map.set(w, map.get(w)!.add(p));
        } else {
          map.set(w, new Set([p]));
        }
      });
    });

    return map;
  }
}
