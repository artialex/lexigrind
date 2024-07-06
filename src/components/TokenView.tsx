import cx from 'clsx';
import { observer } from 'mobx-react-lite';

import { terms } from '@/stores/TermsStore';
import { TokenStore } from '@/stores/TokenStore.ts';

export const TokenView = observer(({ token }: { token: TokenStore }) => {
  const rootClassName = cx({
    'lexi-speech': token.token?.tags.includes('speech'),
  });

  const childClassName = cx('lexi-word-unidentified whitespace-nowrap border-transparent', {
    [`lexi-word-${token.term?.level}`]: token.term?.level,
    'outline outline-1 outline-offset outline-dashed outline-slate-500':
      token.normalized === terms.selected,
    'mark has-note': token.term?.notes && !token.term?.notes?.startsWith('*'),
    'mark exclamation': token.term?.notes?.startsWith('!'),
    'mark question': token.term?.notes?.startsWith('?'),
    'border-b-2 !border-red-400': token.token?.tags?.includes('Phrase'),
  });

  return (
    <span className={rootClassName}>
      {token.token?.pre}
      <span className={childClassName} onClick={() => terms.select(token.normalized)}>
        {token.token.text}
      </span>
      {token.token?.post}
    </span>
  );
});
