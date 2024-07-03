import cx from 'clsx';
import { observer } from 'mobx-react-lite';
import { FormEvent, useMemo } from 'react';
import { Plus, X } from 'react-feather';

import { FragmentFormFields } from '@/components/FragmentFormFields.tsx';
import { SourceFormStore } from '@/stores/SourceFormStore.ts';

interface SourceFormProps {
  source?: Lexi.Source;
  onSubmit: (values: Lexi.Source) => void;
  titleText: string;
  ctaText: string;
}

export const SourceForm = observer(({ onSubmit, source, titleText, ctaText }: SourceFormProps) => {
  const form = useMemo(() => SourceFormStore.of(source), [source]);

  return (
    <form
      className="h-full"
      onSubmit={async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSubmit(await form.toSourceDTO());
      }}
    >
      <div className="m-4">
        <SourceFormHeader form={form} titleText={titleText} ctaText={ctaText} />
        <SourceFormFields form={form} />
      </div>

      <div className="bg-slate-100 p-4">
        <div className="flex gap-4">
          <ul className="min-w-40 truncate">
            <FragmentButtons form={form} />
            <AddFragmentButton form={form} />
          </ul>

          <div className="w-full">
            <FragmentFormFields form={form.fragments.at(form.selected)!} />
          </div>
        </div>
      </div>
    </form>
  );
});

const FragmentButtons = observer(({ form }: { form: SourceFormStore }) => {
  return form.fragments.map((fragment, index) => (
    <li
      key={index}
      className={cx('flex justify-between border-l-2 pl-2', {
        'border-blue-500 text-blue-700': index === form.selected,
      })}
    >
      <button
        type="button"
        onClick={() => {
          form.selectFragment(index);
        }}
      >
        {fragment.title || <span className="text-slate-500">Fragment ${index + 1}</span>}
      </button>
      {form.fragments.length !== 1 && (
        <button
          type="button"
          onClick={() => {
            form.removeFragment(index);
          }}
        >
          <X size="14" />
        </button>
      )}
    </li>
  ));
});

const AddFragmentButton = observer(({ form }: { form: SourceFormStore }) => {
  return (
    <li>
      <button
        type="button"
        className="flex items-center justify-center gap-1"
        onClick={() => {
          form.addFragment();
        }}
      >
        <Plus size="14" /> Add Fragment
      </button>
    </li>
  );
});

interface SourceFormHeaderProps extends Pick<SourceFormProps, 'titleText' | 'ctaText'> {
  form: SourceFormStore;
}

const SourceFormHeader = observer(({ form, ctaText, titleText }: SourceFormHeaderProps) => {
  return (
    <header className="flex justify-between">
      <h1 className="lexi-h1">{titleText}</h1>
      <button
        disabled={form.isCalculating}
        type="submit"
        className={cx('min-w-40 rounded border bg-slate-300 p-1', {
          'opacity-75': form.isCalculating,
        })}
      >
        {form.isCalculating ? 'Calculating...' : ctaText}
      </button>
    </header>
  );
});

const SourceFormFields = observer(({ form }: { form: SourceFormStore }) => {
  return (
    <div className="flex max-w-[800px] flex-grow gap-4">
      <label className="mb-1 flex flex-grow flex-col">
        Title
        <input
          type="text"
          name="title"
          className="lexi-input"
          value={form.title}
          onChange={(e) => form.setTitle(e.target.value)}
        />
      </label>
      <label className="mb-1 flex flex-grow flex-col">
        Author
        <input
          type="text"
          name="title"
          className="lexi-input"
          value={form.author}
          onChange={(e) => form.setAuthor(e.target.value)}
        />
      </label>
    </div>
  );
});
