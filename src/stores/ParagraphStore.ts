import three from 'compromise';
import { makeAutoObservable } from 'mobx';

import { terms, TermsStore } from '@/stores/TermsStore.ts';
import { TokenStore } from '@/stores/TokenStore.ts';
import { Compromise } from '@/utils/compromise.ts';

export class ParagraphStore {
  static of(paragraph: string) {
    return new ParagraphStore(paragraph, terms);
  }

  constructor(
    private paragraph: string,
    private terms: TermsStore,
  ) {
    makeAutoObservable(this);

    this.updatePhrases();
  }

  get view() {
    return three(this.paragraph);
  }

  get tokens() {
    return Compromise.getTokens(this.view).map(TokenStore.of);
  }

  get words() {
    return Compromise.getUniqueWords(this.view);
  }

  updatePhrases() {
    this.view.unTag('Phrase');
    const words = this.words.flatMap((_) => {
      const term = this.terms.map.get(_);

      return term?.phrases;
    });

    if (!words.length) return;

    if (words.every((_) => !this.view.has(_ as string))) return;
    words.forEach((_) => {
      this.view.match(_ as string).tag('Phrase');
    });
    const terms = Compromise.getTokens(this.view);
    this.tokens.forEach((token, index) => {
      token.token.tags = terms.at(index)?.tags ?? [];
    });

    console.log('ParagraphStore :: 55');
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

      if (level < wlevel && wlevel !== 'ignored') level = wlevel;
    }

    return level;
  }
}
