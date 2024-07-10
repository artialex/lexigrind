import { useCallback, useEffect } from 'react';

import { settings } from '../settings.store';

export function useZenMode() {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.code) {
      case 'Escape':
        return settings.setZenMode(false);
      case 'KeyZ':
        return settings.setZenMode(!settings.zen);
    }
  }, []);

  useEffect(() => {
    addEventListener('keydown', handleKeyDown);

    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, []);
}
