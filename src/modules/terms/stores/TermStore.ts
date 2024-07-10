import { makeAutoObservable, reaction } from 'mobx';

import { termsRepo } from '@/modules/terms/terms.repo.ts';

export class TermStore {
  static of(term: Lexi.Term) {
    return new TermStore(term);
  }

  id: string;
  notes? = '';
  sharedNotes: Set<string>;
  level: Lexi.Level = 'unidentified';

  constructor(term: Lexi.Term) {
    makeAutoObservable(this);

    this.id = term._id;
    this.level = term.level;
    this.notes = term.notes;
    this.sharedNotes = new Set(term.sharedNotes);

    reaction(() => this.level, this.persist);
    reaction(() => this.notes, this.persist);
  }

  persist = () => {
    void termsRepo.upsert({
      _id: this.id,
      level: this.level,
      notes: this.notes,
      sharedNotes: this.shared,
    });
  };

  get phrases() {
    return (
      (this.notes?.split('\n') ?? [])
        .filter((_) => _.startsWith('*'))
        ?.flatMap((_) => _.split(/[*=]/g).at(1)?.trim()) ?? []
    );
  }

  get shared() {
    return [...this.sharedNotes];
  }

  setLevel(level: Lexi.Level) {
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
