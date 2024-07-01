import { useMemo } from 'react';

import { TermsGrid } from '@/components/TermsGrid.tsx';
import { PersonalStatsStore } from '@/stores/PersonalStatsStore.ts';

interface FragmentTermsViewProps {
  words: string[];
}

export const FragmentTermsView = (props: FragmentTermsViewProps) => {
  const stats = useMemo(() => PersonalStatsStore.of(props.words), [props.words]);

  return <TermsGrid terms={stats} />;
};
