import { useCallback, useEffect } from 'react';

import { terms } from '@/stores/TermsStore.ts';

export function useKeyboardMarks() {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!terms.selectedTerm) return;

    if (e.key === 'w') {
      terms.selectedTerm.setLevel('0');
    }
    if (e.key === 'u') {
      terms.selectedTerm.setLevel('unidentified');
    }
    if (e.key === 'i') {
      terms.selectedTerm.setLevel('ignored');
    }
    if (['0', '1', '2', '3', '4', '5'].includes(e.key)) {
      terms.selectedTerm.setLevel(e.key as Lexi.TermLevel);
    }
  }, []);

  useEffect(() => {
    addEventListener('keydown', handleKeyDown);

    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, []);
}
