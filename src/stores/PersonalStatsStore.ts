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

  get innerTerms() {
    return this.uniqueWords.map((_) => this.terms.map.get(_)!);
  }

  get of() {
    return groupBy(this.innerTerms, (term) => {
      return term?.level || 'unidentified';
    });
  }

  get percents() {
    return levelKeys.map((level) => {
      return { level, percent: ((this.of[level]?.length ?? 0) / this.uniqueWords.length) * 100 };
    });
  }
}
