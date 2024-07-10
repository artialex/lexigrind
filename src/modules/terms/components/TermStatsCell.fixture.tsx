import { random, range, times } from 'lodash';
import { useMemo } from 'react';

import { TermStatsCell } from './TermStatsCell.tsx';

export default () => (
  <div className="flex gap-2">
    {range(6).map((level) => {
      const terms = useMemo(() => times(random(10, 2000), () => String(random())), []);

      return <TermStatsCell path="" terms={terms} level={String(level) as Lexi.Level} />;
    })}
  </div>
);
