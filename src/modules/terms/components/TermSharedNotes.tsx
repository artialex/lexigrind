import { observer } from 'mobx-react-lite';
import { X } from 'react-feather';

import { useNotesQuery } from '@/modules/notes/notes.queries.ts';
import { TermStore } from '@/modules/terms/stores/TermStore.ts';

export const TermSharedNotes = observer(({ term }: { term: TermStore }) => {
  const { data, isLoading } = useNotesQuery();

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-1 text-sm">
        {term.shared
          .sort()
          .map((id) => data.items.find((_) => _._id === id)!)
          .map((note) => (
            <div key={note._id} className="mt-2 rounded border p-1">
              <div className="flex items-center justify-between font-bold">
                {note?.title}
                <button className="lexi-button" onClick={() => term.removeSharedNote(note._id)}>
                  <X size="14" />
                </button>
              </div>
              <pre className="whitespace-pre-wrap font-sans">{note?.text}</pre>
            </div>
          ))}
      </div>
      <select
        className="mt-2 w-full rounded border bg-slate-100 px-2 py-1 text-sm"
        onChange={(e) => {
          if (e.target.value !== 'none') {
            term.addSharedNote(e.target.value);
          }
        }}
      >
        <option value="none">+ Select shared notes</option>
        {data.items
          .filter((_) => !term.shared?.includes(_._id))
          .map((note) => (
            <option key={note._id} value={note._id}>
              {note.title}
            </option>
          ))}
      </select>
    </>
  );
});
