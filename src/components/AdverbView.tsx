/*
import { observer } from 'mobx-react-lite';
import { Instance } from 'mobx-state-tree';
import { Chapter } from '../../books/stores/chapter.store.ts';
// import { useMemo, useState } from 'react';

interface AdverbViewProps {
  chapter: Instance<typeof Chapter>;
}

export const AdverbView = observer<AdverbViewProps>(({ chapter }) => {
  // const [sort,setSort] = useState('rarity' | 'alphabet')
  // const [filter,setFilter] = useState('rarity' | 'alphabet')
  //
  // const adverbs = useMemo(() => {
  //   return adverbs.filter((adverb) => adverb)
  //
  // }, [chapter, sort, filter])

  return (
    <div className="bg-green-100 min-w-[200px]">
      <h2 className="font-bold">Adverbs</h2>
      <ul>
        {chapter.adverbs.json().map((adverb, index) => (
          <li key={index}>{adverb.terms[0].text}</li>
        ))}
      </ul>
    </div>
  );
});
*/
