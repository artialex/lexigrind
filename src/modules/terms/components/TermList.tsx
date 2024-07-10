import cx from 'clsx';
import { Link, useParams } from 'react-router-dom';

import { useNotesQuery } from '@/modules/notes/notes.queries.ts';
import { useTermsQuery } from '@/modules/terms/terms.queries.ts';

interface TermListProps {
  ids?: string[];
}

export const TermList = (props: TermListProps) => {
  const params = useParams();
  const terms = useTermsQuery(props.ids);
  const notes = useNotesQuery();

  if (!terms.data || !terms.data.items.length || terms.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="m-4 grid grid-cols-6 gap-2">
      {terms.data.items
        .filter((_) => _?.level === params.level)
        .map((term) => (
          <li key={term?._id} className="rounded border p-2">
            <Link
              to={`/terms/term/${term._id}`}
              className={cx('inline-block rounded px-2 py-0.5 uppercase', {
                [`lexi-word-${term.level}`]: term.level,
              })}
            >
              <span className="text">{term._id.at(0)}</span>
              <span className="text-sm">{term._id.slice(1)}</span>
            </Link>
            <pre className="whitespace-pre-wrap p-1 font-sans text-xs">{term.notes}</pre>
            {term.sharedNotes && (
              <div className="p-1 text-xs font-bold underline">
                {term.sharedNotes.map(
                  (noteId) => notes.data?.items.find((_) => _._id === noteId)?.title,
                )}
              </div>
            )}
          </li>
        ))}
    </ul>
  );
};
