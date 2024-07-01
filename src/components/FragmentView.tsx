// import { paragraphs } from '@/init/paragraphs.init.ts';
// import { FragmentStore } from '@/stores/FragmentStore.ts';
import cx from 'clsx';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';

import { FragmentGutter } from '@/components/FragmentGutter.tsx';
import { FragmentSideBar } from '@/components/FragmentSideBar.tsx';
import { FragmentToolbar } from '@/components/FragmentToolbar.tsx';
import { ParagraphView } from '@/components/ParagraphView.tsx';
import { useKeyboardMarks } from '@/hooks/useKeyboardMarks.ts';
import { useZenMode } from '@/hooks/useZenMode.ts';
import { FragmentStore } from '@/stores/FragmentStore.ts';
import { settings } from '@/stores/SettingsStore.ts';

export const FragmentView = observer((props: { fragment: Lexi.Fragment }) => {
  const fragment = useMemo(() => FragmentStore.of(props.fragment), [props.fragment]);

  useZenMode();
  useKeyboardMarks();

  return (
    <div>
      {!settings.zen && <FragmentToolbar fragment={props.fragment} />}
      <div
        className={cx('top-20 flex h-max gap-2', {
          'justify-center': settings.zen,
        })}
      >
        {!settings.zen && <FragmentSideBar />}
        <div className="relative">
          {!settings.zen && <FragmentGutter paragraphs={fragment.paragraphs} />}
          <div className="m-4 my-auto mb-40 mt-10 px-16 ">
            {fragment.paragraphs.map((paragraph, index) => (
              <ParagraphView key={index} paragraph={paragraph} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
