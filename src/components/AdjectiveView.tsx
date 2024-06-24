/*
import { observer } from 'mobx-react-lite';
import { ChevronRight } from 'react-feather';
import { IChapter } from '@/models/chapter.model.ts';

interface AdjectiveViewProps {
  chapter: IChapter;
}

export const AdjectiveView = observer<AdjectiveViewProps>(({ chapter }) => {
  return (
    <div className="min-w-[200px]">
      <h2 className="font-semibold uppercase flex items-center gap-1">
        <ChevronRight size="16" />
        {/!*Adjectives {chapter.adjectives.length}*!/}
      </h2>
      {/!*
      <ul>
        {chapter.adjectives.json().map((adjective, index) => (
          <li className="mb-1" key={index}>
            <button
              className={cx(
                'lexi-word-unidentified',
                `lexi-word-${terms.map.get(adjective.terms[0].text)?.level}`
              )}
              onClick={() => terms.select(adjective.terms[0].text)}
            >
              {adjective.terms[0].text}
            </button>
          </li>
        ))}
      </ul>
*!/}
    </div>
  );
});
*/
