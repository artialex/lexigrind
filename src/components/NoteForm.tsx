import cx from 'clsx';
import { nanoid } from 'nanoid';
import { FormEvent, useState } from 'react';

interface NoteFormProps {
  titleText: string;
  ctaText: string;
  values?: Lexi.SharedNote;
  onSubmit: (values: Lexi.SharedNote) => void;
}

export const NoteForm = (props: NoteFormProps) => {
  const [values, setValues] = useState<Lexi.SharedNote>({
    _id: props.values?._id ?? nanoid(),
    title: props.values?.title ?? '',
    text: props.values?.text ?? '',
  });

  return (
    <form
      className="m-4"
      onSubmit={async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        props.onSubmit(values);
      }}
    >
      <header className="flex justify-between">
        <h1 className="lexi-h1"> {props.titleText}</h1>
        <button
          className={cx('min-w-40 rounded border bg-slate-300 p-1', {
            // 'opacity-75': form.isCalculating,
          })}
        >
          {props.ctaText}
        </button>
      </header>
      <label className="mb-1 flex flex-grow flex-col">
        <span>Title</span>
        <input
          name="title"
          className="lexi-input"
          type="text"
          value={values.title}
          onChange={(e) => {
            setValues((prev) => ({
              ...prev,
              title: e.target.value,
            }));
          }}
        />
      </label>
      <label className="mb-1 flex flex-grow flex-col">
        <span>Text</span>
        <textarea
          name="text"
          rows={20}
          className="lexi-input"
          value={values.text}
          onChange={(e) => {
            setValues((prev) => ({
              ...prev,
              text: e.target.value,
            }));
          }}
        />
      </label>
    </form>
  );
};
