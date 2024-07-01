import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';

import { TermStore } from '@/stores/TermStore.ts';

export const TermNotes = (props: { term: TermStore }) => {
  const [value, setValue] = useState(props.term?.notes ?? '');

  useEffect(() => {
    setValue(props.term?.notes ?? '');
  }, [props.term]);

  const handleNotesChange = useCallback(
    debounce((value) => props.term?.setNotes(value), 500),
    [props.term],
  );

  return (
    <textarea
      className="w-full rounded border bg-slate-50 p-2"
      rows={20}
      placeholder="Write down some notes about the word here"
      value={value}
      onKeyDown={(e) => e.stopPropagation()}
      onChange={(e) => {
        e.stopPropagation();
        e.preventDefault();

        setValue(e.target.value);

        handleNotesChange(e.target.value);
      }}
    />
  );
};
