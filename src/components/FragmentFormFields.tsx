import { observer } from 'mobx-react-lite';

import { FragmentFormStore } from '@/stores/FragmentFormStore.ts';

export const FragmentFormFields = observer(({ form }: { form: FragmentFormStore }) => {
  return (
    <div className="rounded bg-white p-4">
      <label className="mb-2 flex flex-col">
        Fragment Title
        <input
          type="text"
          className="lexi-input"
          value={form.title}
          onChange={(e) => {
            form.setTitle(e.target.value);
          }}
        />
      </label>
      <label className="mb-2 flex flex-col">
        Fragment Content
        <textarea
          name="content"
          rows={10}
          className="lexi-input"
          value={form.content}
          onChange={(e) => {
            form.setContent(e.target.value);
          }}
        />
      </label>
      <div className="flex justify-between gap-2">
        <label className="mb-2 flex flex-col text-sm">
          Paragraph Count
          <input type="text" value={form.stats.paragraphCount} className="lexi-input" readOnly />
        </label>
        <label className="mb-2 flex flex-col text-sm">
          Sentence Count
          <input type="text" value={form.stats.sentenceCount} className="lexi-input" readOnly />
        </label>
        <label className="mb-2 flex flex-col text-sm">
          Word Count
          <input type="text" value={form.stats.wordCount} className="lexi-input" readOnly />
        </label>
        <label className="mb-2 flex flex-col text-sm">
          Unique Word Count
          <input type="text" value={form.stats.uniqueWordCount} className="lexi-input" readOnly />
        </label>
      </div>
    </div>
  );
});
