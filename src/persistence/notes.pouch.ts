import { PouchRepository } from '@/persistence/pouch.ts';

export class NotesRepository extends PouchRepository<Lexi.SharedNote> {
  constructor(options?: { test: boolean }) {
    super('notes', options);
  }
}

export const notesRepo = new NotesRepository();
