import { useMemo } from 'react';

import { TermsGrid } from '@/components/TermsGrid.tsx';
import { PersonalStatsStore } from '@/stores/PersonalStatsStore.ts';

interface SourceTermsViewProps {
  words: string[];
}

export const SourceTermsView = (props: SourceTermsViewProps) => {
  const stats = useMemo(() => PersonalStatsStore.of(props.words), [props.words]);

  return <TermsGrid terms={stats} />;
};
