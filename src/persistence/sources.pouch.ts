import { merge } from 'lodash';
import PouchDB from 'pouchdb-browser';

const db = new PouchDB('sources', {
  revs_limit: 1,
});

interface PaginationOptions {
  limit: number;
  skip: number;
}

type DBSource = { source: Lexi.Source };

export async function bulkInsert(sources: Lexi.Source[]) {
  await db.destroy();
  await db.bulkDocs<DBSource>(
    sources.map((source) => ({
      _id: source.id,
      source,
    })),
  );
}

export async function getSources(options?: PaginationOptions) {
  const response = await db.allDocs<DBSource>({
    include_docs: true,
    ...options,
  });

  return {
    total: response.total_rows,
    sources: response.rows.map((_) => _.doc!.source),
  };
}

export async function getSource(sourceId: string) {
  const response = await db.get<DBSource>(sourceId);

  return response.source;
}

export async function getFragment(sourceId: string, fragmentId: string) {
  const response = await db.get<DBSource>(sourceId);

  return response.source.fragments.find((_) => _.id === fragmentId);
}

export async function addSource(source: Lexi.Source) {
  await db.put({ source, _id: source.id });
}

export async function editSource(sourceId: string, source: Lexi.Source) {
  const doc = await db.get<DBSource>(sourceId);

  doc.source = source;

  await db.put(doc);
}

export async function patchSource(sourceId: string, source: Lexi.Source) {
  const doc = await db.get<DBSource>(sourceId);

  merge(doc.source, source);

  await db.put(doc);
}

export async function removeSource(sourceId: string) {
  const doc = await db.get<DBSource>(sourceId);

  await db.remove(doc);
}
