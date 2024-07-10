import { groupBy } from 'lodash';
import { makeAutoObservable, runInAction } from 'mobx';

import { termsRepo } from '@/modules/terms/terms.repo.ts';

import { TermStore } from './TermStore';

export class TermsStore {
  map: Map<string, TermStore> = new Map();
  selected: string | null = null;

  constructor() {
    makeAutoObservable(this);

    termsRepo.retrieveMany().then((result) => {
      runInAction(() => {
        this.map = new Map(result.items.map((term) => [term._id, TermStore.of(term)]));
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
      this.map.set(selected, TermStore.of({ _id: selected, level: 'unidentified' }));
    }

    void navigator.clipboard.writeText(this.selected);
  }

  deselect() {
    this.selected = null;
  }
}

export const terms = new TermsStore();
