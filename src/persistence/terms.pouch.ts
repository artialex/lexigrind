import { merge } from 'lodash';
import PouchDB from 'pouchdb-browser';

const db = new PouchDB('terms', {
  revs_limit: 1,
});

type DBTerm = { term: Lexi.Term };

export async function upsertMany(terms: [string, Lexi.Term][]) {
  await db.destroy();
  await db.bulkDocs(
    terms.map(([id, term]) => ({
      _id: id,
      term,
    })),
  );
}

export async function getAllTerms() {
  const response = await db.allDocs<DBTerm>({ include_docs: true });

  return response.rows.map((_) => [_.id, _.doc!.term] as const);
}

export async function putTerm(term: Pick<Lexi.Term, 'id'> & Partial<Lexi.Term>) {
  return db
    .get<DBTerm>(term.id)
    .then((doc) => {
      merge(doc.term, term);

      db.put(doc);
    })
    .catch((err: PouchDB.Core.Error) => {
      if (err.name === 'not_found') {
        db.put({ term, _id: term.id });
      }
    });
}
