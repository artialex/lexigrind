import { merge } from 'lodash';
import PouchDB from 'pouchdb';

export abstract class PouchRepository<T extends { _id: string }> {
  db: PouchDB.Database;

  protected constructor(
    private name: string,
    private options?: { test: boolean },
  ) {
    this.db = this.createDatabase(name);
  }

  createDatabase(name: string) {
    if (this.options?.test) {
      return new PouchDB(name, { revs_limit: 1, adapter: 'memory' });
    }
    return new PouchDB(name, { revs_limit: 1 });
  }

  async destroyDatabase() {
    await this.db.destroy();
  }

  async retrieve(id: string) {
    return await this.db.get<T>(id);
  }

  async retrieveMany(ids?: string[]) {
    const response = await this.db.allDocs<T>({ include_docs: true, ...(ids && { keys: ids }) });

    return {
      total: response.total_rows,
      items: response.rows.map((_) => _.doc) as T[],
    };
  }

  async upsert(item: T) {
    try {
      const stored = await this.db.get<T>(item._id);

      merge(stored, item);

      await this.db.put(stored);
    } catch (err: unknown) {
      if ((err as PouchDB.Core.Error).name === 'not_found') {
        await this.db.put(item);
      }
    }
  }

  async upsertMany(items: T[]) {
    await this.db.bulkDocs(items);
  }

  async populate(items: T[]) {
    await this.db.destroy();
    this.db = this.createDatabase(this.name);
    await this.upsertMany(items);
  }

  async dump() {
    const response = await this.retrieveMany();

    return JSON.stringify(response.items);
  }
}
