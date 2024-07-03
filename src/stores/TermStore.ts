import { makeAutoObservable, reaction } from 'mobx';

import { putTerm } from '@/persistence/terms.pouch.ts';

export class TermStore {
  static of(term: Lexi.Term) {
    return new TermStore(term);
  }

  id: string;
  notes? = '';
  sharedNotes: Set<string>;
  level: Lexi.TermLevel = 'unidentified';

  constructor(term: Lexi.Term) {
    makeAutoObservable(this);

    this.id = term.id;
    this.level = term.level;
    this.notes = term.notes;
    this.sharedNotes = new Set(term.sharedNotes);

    reaction(() => this.level, this.persist);
    reaction(() => this.notes, this.persist);
  }

  persist = () => {
    void putTerm({
      id: this.id,
      level: this.level,
      notes: this.notes,
      sharedNotes: this.shared,
    });
  };

  get shared() {
    return [...this.sharedNotes];
  }

  setLevel(level: Lexi.TermLevel) {
    this.level = level;
  }

  setNotes(notes: string) {
    this.notes = notes;
  }

  addSharedNote(id: string) {
    this.sharedNotes?.add(id);

    this.persist();
  }

  removeSharedNote(id: string) {
    this.sharedNotes?.delete(id);

    this.persist();
  }
}
