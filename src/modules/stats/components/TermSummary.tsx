import { observer } from 'mobx-react-lite';

import { levelKeys } from '@/modules/levels/constants.ts';
import { TermStatsCell } from '@/modules/terms/components/TermStatsCell.tsx';
import { terms } from '@/modules/terms/stores/TermsStore.ts';

export const TermSummary = observer(() => {
  return (
    <ul className="lexi-text-stats-view flex items-center gap-2 text-right text-sm">
      {levelKeys.map((level) => (
        <TermStatsCell key={level} level={level} path="" terms={terms.of[level]} hideUnidentified />
      ))}
    </ul>
  );
});
