import cx from 'clsx';
import { chunk } from 'lodash';
import { observer } from 'mobx-react-lite';

import { ParagraphStore } from '@/stores/ParagraphStore.ts';

// import { paragraphs } from '@/init/paragraphs.init.ts';

export const FragmentGutter = observer(({ paragraphs }: { paragraphs: ParagraphStore[] }) => {
  return (
    <div className="fixed flex h-[calc(100%-2rem)] gap-0.5">
      {chunk(paragraphs, 100).map((_, index) => (
        <div key={index} className="flex h-full flex-col gap-0.5">
          {_.map(({ level }, index) => (
            <div
              key={index}
              className={cx('w-2.5 basis-[0.5%] rounded-sm', {
                'mt-2': index % 10 === 0,

                'bg-slate-100': level === 'unidentified',
                'bg-emerald-100': level === '0' || level === '1',
                'bg-sky-200': level === '2',
                'bg-amber-200': level === '3',
                'bg-rose-300': level === '4',
                'bg-fuchsia-300': level === '5',
              })}
            />
          ))}
        </div>
      ))}
    </div>
  );
});
