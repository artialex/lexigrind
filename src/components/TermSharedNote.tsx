import { debounce } from 'lodash';
import { useCallback, useState } from 'react';

interface TermSharedNoteProps {
  note: Lexi.SharedNote;
}

export const TermSharedNote = (props: TermSharedNoteProps) => {
  const [value, setValue] = useState(() => props.note.text);

  const handleChange = useCallback(
    debounce((value) => {
      console.log('TermSharedNote :: 12', value);
    }, 500),
    [],
  );

  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => {
          e.stopPropagation();
          e.preventDefault();

          setValue(e.target.value);
          handleChange(e.target.value);
        }}
      />
    </div>
  );
};
