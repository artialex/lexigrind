import { observer } from 'mobx-react-lite';

import { TermStatsCell } from '@/components/TermStatsCell.tsx';
import { levelKeys } from '@/constants/levels.ts';
import { terms } from '@/stores/TermsStore.ts';

export const TermSummary = observer(() => {
  return (
    <ul className="lexi-text-stats-view flex items-center gap-2 text-right text-sm">
      {levelKeys.map((level) => (
        <TermStatsCell key={level} level={level} terms={terms.of[level]} hideUnidentified />
      ))}
    </ul>
  );
});
