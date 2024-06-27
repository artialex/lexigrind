import { groupBy } from 'lodash';
import { makeAutoObservable, runInAction } from 'mobx';

import { getAllTerms } from '@/persistence/terms.pouch.ts';
import { TermStore } from '@/stores/TermStore.ts';

export class TermsStore {
  map: Map<string, TermStore> = new Map();
  selected: string | null = null;

  constructor() {
    makeAutoObservable(this);

    getAllTerms().then((result) => {
      runInAction(() => {
        this.map = new Map(result.map(([id, term]) => [id, new TermStore(term)]));
      });
    });
  }

  // FIXME: better method?
  get of() {
    return groupBy([...this.map.values()], (term) => {
      return term?.level || 'unidentified';
    });
  }

  get selectedTerm() {
    if (!this.selected) return null;

    return this.map.get(this.selected);
  }

  select(selected: string) {
    this.selected = selected;

    if (!this.map.has(selected)) {
      this.map.set(selected, TermStore.of({ id: selected, level: 'unidentified' }));
    }

    void navigator.clipboard.writeText(this.selected);
  }
}

export const terms = new TermsStore();
