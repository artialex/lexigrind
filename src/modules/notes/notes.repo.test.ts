import PouchDB from 'pouchdb';
import MemoryAdapter from 'pouchdb-adapter-memory';
import { beforeAll, describe, expect, it } from 'vitest';

import { NotesRepository } from './notes.repo';

beforeAll(() => {
  PouchDB.plugin(MemoryAdapter);
});

describe('NotesRepository', () => {
  it('should work', async () => {
    const repo = new NotesRepository({ test: true });

    expect(await repo.retrieveMany()).toEqual({
      total: 0,
      items: [],
    });

    const note1 = {
      _id: '1',
      title: 'First note',
      text: 'First note content',
    };

    await repo.upsert(note1);

    expect(await repo.retrieveMany()).toMatchObject({ total: 1, items: [note1] });

    expect(await repo.retrieve('1')).toMatchObject(note1);

    const note2 = {
      _id: '2',
      title: 'Second note',
      text: 'Second note content',
    };

    const note3 = {
      _id: '3',
      title: 'Third note',
      text: 'Third note content',
    };

    await repo.upsertMany([note2, note3]);

    expect(await repo.retrieveMany()).toMatchObject({ total: 3, items: [note1, note2, note3] });

    expect(await repo.retrieveMany(['1', '3'])).toMatchObject({ total: 3, items: [note1, note3] });
  });
});
