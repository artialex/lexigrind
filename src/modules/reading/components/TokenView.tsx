import cx from 'clsx';
import { observer } from 'mobx-react-lite';

import { TokenStore } from '@/modules/reading/stores/TokenStore.ts';
import { terms } from '@/modules/terms/stores/TermsStore.ts';

export const TokenView = observer(({ token }: { token: TokenStore }) => {
  const rootClassName = cx({
    'lexi-speech': token.token?.tags.includes('speech'),
  });

  const childClassName = cx('lexi-word-unidentified whitespace-nowrap border-transparent', {
    [`lexi-word-${token.term?.level}`]: token.term?.level,
    selected: token.normalized === terms.selected,
    'mark has-note': token.term?.notes && !token.term?.notes?.startsWith('*'),
    'mark exclamation': token.term?.notes?.startsWith('!'),
    'mark question': token.term?.notes?.startsWith('?'),
    phrase: token.token?.tags?.includes('Phrase'),
  });

  return (
    <span className={rootClassName}>
      {token.token?.pre}
      <span
        className={childClassName}
        onClick={(e) => {
          e.stopPropagation();
          terms.select(token.normalized);
        }}
      >
        {token.token.text}
      </span>
      {token.token?.post}
    </span>
  );
});
