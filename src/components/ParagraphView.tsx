import cx from 'clsx';
import { observer } from 'mobx-react-lite';

import { ParagraphStore } from '@/stores/ParagraphStore.ts';

import { TokenView } from './TokenView.tsx';

export const ParagraphView = observer(({ paragraph }: { paragraph: ParagraphStore }) => {
  return (
    <div className="mb-4">
      <div className="flex items-start justify-between gap-2">
        <p
          className={cx('max-w-[900px] border-l-4 pl-2 indent-6 font-serif text-2xl', {
            'border-transparent': paragraph.level === 'unidentified',
            'border-emerald-100': paragraph.level === '0' || paragraph.level === '1',
            'border-sky-100': paragraph.level === '2',
            'border-amber-100': paragraph.level === '3',
            'border-rose-100': paragraph.level === '4',
            'border-fuchsia-100': paragraph.level === '5',
          })}
        >
          {paragraph.tokens.map((token, index) => (
            <TokenView token={token} key={index} />
          ))}
        </p>
      </div>
    </div>
  );
});
