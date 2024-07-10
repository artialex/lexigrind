import { range, sample } from 'lodash';

import { TermStore } from '@/modules/terms/stores/TermStore.ts';

import { Term } from './Term.tsx';

const words =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit Aliquam asperiores assumenda commodi eaque inventore ipsam maiores quidem quis quo ut Aliquid architecto aut cumque quam quibusdam quidem soluta tempora voluptate'.split(
    ' ',
  ) as string[];

export default () => (
  <div className="flex flex-wrap gap-2">
    {range(10).map((level) => (
      <Term
        term={TermStore.of({
          _id: sample(words) as string,
          level: String(level) as Lexi.Level,
        })}
      />
    ))}
  </div>
);
