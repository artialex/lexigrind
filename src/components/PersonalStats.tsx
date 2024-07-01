import { observer } from 'mobx-react-lite';

import { TermStatsCell } from '@/components/TermStatsCell.tsx';
import { levelKeys } from '@/constants/levels.ts';
import { PersonalStatsStore } from '@/stores/PersonalStatsStore.ts';

export const PersonalStatsView = observer(({ stats }: { stats: PersonalStatsStore }) => {
  return (
    <>
      {levelKeys.map((level) => (
        <TermStatsCell key={level} terms={stats.of[level]} level={level} />
      ))}
    </>
  );
});
