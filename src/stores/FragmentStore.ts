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
}
