import one from 'compromise/one';
import { makeAutoObservable } from 'mobx';

import { terms, TermsStore } from '@/stores/TermsStore.ts';
import { TokenStore } from '@/stores/TokenStore.ts';
import { getUniqueWords } from '@/utils/compromise.ts';

export class ParagraphStore {
  static of(paragraph: string) {
    return new ParagraphStore(paragraph, terms);
  }

  constructor(
    private paragraph: string,
    private terms: TermsStore,
  ) {
    makeAutoObservable(this);
  }

  get view() {
    return one(this.paragraph);
  }

  get tokens(): TokenStore[] {
    return this.view
      .json()
      .flatMap((_) => _.terms)
      .filter((_) => _.text !== '')
      .map(TokenStore.of);
  }

  get words() {
    return getUniqueWords(this.view);
  }

  get level() {
    if (this.terms.map.size === 0) {
      return 'unidentified';
    }

    let level = '0';

    for (const word of this.words) {
      if (!this.terms.map.has(word) || this.terms.map.get(word)?.level === 'unidentified') {
        return 'unidentified';
      }

      const wlevel = this.terms.map.get(word)?.level;

      if (!wlevel) continue;

      if (level < wlevel) level = wlevel;
    }

    return level;
  }
}
