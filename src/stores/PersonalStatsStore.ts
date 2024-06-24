import { groupBy } from 'lodash';
import { makeAutoObservable } from 'mobx';

import { levelKeys } from '@/constants/levels.ts';
import { TermsStore } from '@/stores/TermsStore.ts';

export class PersonalStats {
  constructor(
    private words: string[],
    private terms: TermsStore,
  ) {
    makeAutoObservable(this);
  }

  get of() {
    return groupBy(this.words, (word) => {
      return this.terms.map.get(word)?.level || 'unidentified';
    });
  }

  get percents() {
    return levelKeys.map((level) => {
      return { level, percent: ((this.of[level]?.length ?? 0) / this.words.length) * 100 };
    });
  }
}
