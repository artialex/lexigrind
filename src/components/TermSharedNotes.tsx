import { observer } from 'mobx-react-lite';
import { X } from 'react-feather';

import { useNotesQuery } from '@/queries/notes.api.ts';
import { TermStore } from '@/stores/TermStore.ts';

export const TermSharedNotes = observer(({ term }: { term: TermStore }) => {
  const { data, isLoading } = useNotesQuery();

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mb-2 flex flex-col gap-1 text-sm">
        <span className="font-semibold">Shared Notes</span>

        {term.shared
          .sort()
          .map((id) => data.items.find((_) => _._id === id)!)
          .map((note) => (
            <div key={note._id} className="rounded border p-1">
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
        className="w-full rounded border bg-slate-100 px-2 py-1 text-sm"
        onChange={(e) => {
          if (e.target.value !== 'none') {
            term.addSharedNote(e.target.value);
          }
        }}
      >
        <option value="none">+ Add shared notes</option>
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
