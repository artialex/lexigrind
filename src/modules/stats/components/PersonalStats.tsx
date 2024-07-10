import { observer } from 'mobx-react-lite';

import { levelKeys } from '@/modules/levels/constants.ts';
import { PersonalStatsStore } from '@/modules/stats/PersonalStatsStore.ts';
import { TermStatsCell } from '@/modules/terms/components/TermStatsCell.tsx';

interface PersonalStatsViewProps {
  stats: PersonalStatsStore;
  path: string;
}

export const PersonalStatsView = observer(({ stats, path }: PersonalStatsViewProps) => {
  return (
    <>
      {levelKeys.map((level) => (
        <TermStatsCell key={level} terms={stats.of[level]} level={level} path={path} />
      ))}
    </>
  );
});
