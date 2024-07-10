import cx from 'clsx';
import { observer } from 'mobx-react-lite';
import { FormEvent, useMemo } from 'react';

import { FragmentFormStore } from '../stores/FragmentFormStore.ts';
import { FragmentFormFields } from './FragmentFormFields';

interface FragmentFormProps {
  source: Lexi.Source;
  fragment: Lexi.Fragment;
  onSubmit: (source: Lexi.Source) => void;
}

export const FragmentForm = observer(({ onSubmit, source, fragment }: FragmentFormProps) => {
  const form = useMemo(() => new FragmentFormStore(fragment), [fragment]);

  return (
    <form
      onSubmit={async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSubmit(await form.toSourceDTO(source));
      }}
    >
      <div className="m-4">
        <div className="flex justify-between">
          <h1>
            <span className="lexi-h1">Edit Fragment</span>
            <small className="ml-2">inside a source "{source.title}"</small>
          </h1>
          <SubmitButton form={form} />
        </div>
      </div>
      <div className="bg-slate-100 p-4">
        <FragmentFormFields form={form} />
      </div>
    </form>
  );
});

const SubmitButton = observer(({ form }: { form: FragmentFormStore }) => {
  return (
    <button
      disabled={form.isCalculating}
      type="submit"
      className={cx('min-w-40 rounded border bg-slate-300 p-1', {
        'opacity-75': form.isCalculating,
      })}
    >
      {form.isCalculating ? 'Calculating...' : 'Update'}
    </button>
  );
});
