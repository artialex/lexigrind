import { groupBy } from 'lodash';
import { makeAutoObservable } from 'mobx';

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
}
