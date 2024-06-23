import { groupBy } from 'lodash';
import { makeAutoObservable, reaction, runInAction } from 'mobx';

import { getAllTerms, putTerm } from '@/persistence/terms.db.ts';

export class TermStore {
  id: string;
  notes? = '';
  level: Lexi.TermLevel = 'unidentified';

  constructor(term: Lexi.Term) {
    makeAutoObservable(this);

    this.id = term.id;
    this.level = term.level;
    this.notes = term.notes;

    reaction(() => this.level, this.persist);
    reaction(() => this.notes, this.persist);
  }

  persist = () => {
    void putTerm({
      id: this.id,
      level: this.level,
      notes: this.notes,
    });
  };

  setLevel(level: Lexi.TermLevel) {
    this.level = level;
  }

  setNotes(notes: string) {
    this.notes = notes;
  }
}

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

  // fixme
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
      this.map.set(selected, new TermStore({ id: selected, level: 'unidentified' }));
    }
  }
}

export const terms = new TermsStore();
