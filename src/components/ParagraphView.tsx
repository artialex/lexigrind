import cx from 'clsx';
import { observer } from 'mobx-react-lite';

import { ParagraphStore } from '@/stores/ParagraphStore.ts';

import { TokenView } from './TokenView.tsx';

export const ParagraphView = observer(({ paragraph }: { paragraph: ParagraphStore }) => {
  return (
    <div className="mb-4">
      <div className="flex items-start justify-between gap-2">
        <p
          className={cx(
            'relative max-w-[900px] pl-2 indent-6 font-serif text-2xl before:absolute before:inset-0  before:-left-2 before:h-full before:w-1 before:rounded ',
            {
              'before:bg-transparent': paragraph.level === 'unidentified',
              'before:bg-emerald-100': paragraph.level === '0' || paragraph.level === '1',
              'before:bg-sky-100': paragraph.level === '2',
              'before:bg-amber-100': paragraph.level === '3',
              'before:bg-rose-100': paragraph.level === '4',
              'before:bg-fuchsia-100': paragraph.level === '5',
            },
          )}
        >
          {paragraph.tokens.map((token, index) => (
            <TokenView token={token} key={index} />
          ))}
        </p>
      </div>
    </div>
  );
});
