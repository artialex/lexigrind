import { random, range, times } from 'lodash';
import { useMemo } from 'react';

import { TermStatsCell } from './TermStatsCell';

export default () => (
  <div className="flex gap-2">
    {range(6).map((level) => {
      const terms = useMemo(() => times(random(10, 2000), () => String(random())), []);

      return <TermStatsCell terms={terms} level={String(level) as Lexi.TermLevel} />;
    })}
  </div>
);
