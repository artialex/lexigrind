import { makeAutoObservable, reaction } from 'mobx';

import { putTerm } from '@/persistence/terms.pouch.ts';

export class TermStore {
  static of(term: Lexi.Term) {
    return new TermStore(term);
  }

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
