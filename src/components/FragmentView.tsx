// import { paragraphs } from '@/init/paragraphs.init.ts';
// import { FragmentStore } from '@/stores/FragmentStore.ts';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';

import { FragmentGutter } from '@/components/FragmentGutter.tsx';
import { FragmentSideBar } from '@/components/FragmentSideBar.tsx';
import { FragmentToolbar } from '@/components/FragmentToolbar.tsx';
import { ParagraphView } from '@/components/ParagraphView.tsx';
import { useKeyboardMarks } from '@/hooks/useKeyboardMarks.ts';
import { FragmentStore } from '@/stores/FragmentStore.ts';

export const FragmentView = observer((props: { fragment: Lexi.Fragment }) => {
  const fragment = useMemo(() => FragmentStore.of(props.fragment), [props.fragment]);

  useKeyboardMarks();

  return (
    <div>
      <FragmentToolbar fragment={props.fragment} />
      <div className="top-20 flex h-max gap-2">
        <FragmentSideBar />
        <div className="relative">
          <FragmentGutter paragraphs={fragment.paragraphs} />
          <div className="m-4 my-auto mb-40 mt-10  px-16 ">
            {fragment.paragraphs.map((paragraph, index) => (
              <ParagraphView key={index} paragraph={paragraph} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

/*useEffect(() => {
  const mapped = fragment.paragraphs.map((paragraph) => {
    const json = compromiseThree(paragraph).json();
    const words = (
      compromiseThree(paragraph).terms().unique().toLowerCase().json() as Array<{
        terms: Array<{ text: string; tags: string[] }>;
      }>
    )
      .flatMap((_) =>
        _.terms.map((_) => {
          const found = _.text.match(/['’]/);

          if (_.tags.includes('Possessive') && found) {
            const [text] = _.text.split(/['’]/);
            return text;
          }
          return _.text;
        }),
      )
      .filter(Boolean);

    const terms = json.flatMap((_: { terms: string[] }) => _.terms);

    return {
      terms,
      words,
    };
  });

  // paragraphs.set(mapped);
}, [fragment])*/
