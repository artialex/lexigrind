import { groupBy } from 'lodash';
import { makeAutoObservable } from 'mobx';

import { levelKeys } from '@/constants/levels.ts';
import { terms, TermsStore } from '@/stores/TermsStore.ts';

export class PersonalStatsStore {
  static of(words: string[]) {
    return new PersonalStatsStore(words, terms);
  }

  constructor(
    private words: string[],
    private terms: TermsStore,
  ) {
    makeAutoObservable(this);
  }

  // FIXME: this is incorrect
  get uniqueWords() {
    return [...new Set(this.words)];
  }

  get of() {
    return groupBy(this.uniqueWords, (term) => {
      return this.terms.map.get(term)?.level || 'unidentified';
    });
  }

  get percents() {
    return levelKeys.map((level) => {
      return { level, percent: ((this.of[level]?.length ?? 0) / this.uniqueWords.length) * 100 };
    });
  }
}
