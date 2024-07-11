// import { paragraphs } from '@/init/paragraphs.init.ts';
// import { FragmentStore } from '@/stores/FragmentStore.ts';
import cx from 'clsx';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';

import { useKeyboardMarks } from '@/modules/keyboard/hooks/useKeyboardMarks.ts';
import { FragmentGutter } from '@/modules/reading/components/FragmentGutter.tsx';
import { FragmentSideBar } from '@/modules/reading/components/FragmentSideBar.tsx';
import { FragmentToolbar } from '@/modules/reading/components/FragmentToolbar.tsx';
import { ParagraphView } from '@/modules/reading/components/ParagraphView.tsx';
import { FragmentStore } from '@/modules/reading/stores/FragmentStore.ts';
import { useZenMode } from '@/modules/settings/hooks/useZenMode.ts';
import { settings } from '@/modules/settings/settings.store';
import { terms } from '@/modules/terms/stores/TermsStore.ts';

export const FragmentView = observer((props: { fragment: Lexi.Fragment }) => {
  const fragment = useMemo(() => FragmentStore.of(props.fragment), [props.fragment]);

  useZenMode();
  useKeyboardMarks();

  return (
    <>
      {!settings.zen && <FragmentToolbar fragment={props.fragment} />}
      <div
        className={cx('top-20 flex gap-2 overflow-y-auto', {
          'justify-center': settings.zen,
        })}
      >
        {!settings.zen && <FragmentSideBar />}
        <div>
          {!settings.zen && <FragmentGutter paragraphs={fragment.paragraphs} />}
          <div
            className=" m-4 my-auto mb-40 mt-10 px-16"
            onClick={() => {
              terms.deselect();
            }}
          >
            {fragment.paragraphs.map((paragraph, index) => (
              <ParagraphView key={index} paragraph={paragraph} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
});
