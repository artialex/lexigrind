import { useCallback, useEffect } from 'react';

import { terms } from '@/stores/TermsStore.ts';

export function useKeyboardMarks() {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.code) {
      case 'Digit0':
      case 'Numpad0':
      case 'KeyW':
        return terms.selectedTerm?.setLevel('0');
      case 'Digit1':
      case 'Numpad1':
        return terms.selectedTerm?.setLevel('1');
      case 'Digit2':
      case 'Numpad2':
        return terms.selectedTerm?.setLevel('2');
      case 'Digit3':
      case 'Numpad3':
        return terms.selectedTerm?.setLevel('3');
      case 'Digit4':
      case 'Numpad4':
        return terms.selectedTerm?.setLevel('4');
      case 'Digit5':
      case 'Numpad5':
        return terms.selectedTerm?.setLevel('5');
      case 'KeyI':
      case 'NumpadDecimal':
        return terms.selectedTerm?.setLevel('ignored');
      case 'KeyU':
        return terms.selectedTerm?.setLevel('unidentified');
    }
  }, []);

  useEffect(() => {
    addEventListener('keydown', handleKeyDown);

    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, []);
}
