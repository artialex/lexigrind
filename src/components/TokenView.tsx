import cx from 'clsx';
import { observer } from 'mobx-react-lite';
import { Fragment } from 'react';

import { terms } from '@/stores/TermsStore';
import { TokenStore } from '@/stores/TokenStore.ts';

export const TokenView = observer(({ token }: { token: TokenStore }) => {
  return (
    <Fragment>
      {token.token.pre}
      <span
        className={cx('lexi-word-unidentified border border-dashed border-transparent', {
          [`lexi-word-${token.term?.level}`]: token.term?.level,
          'border-slate-500': token.normalized === terms.selected,
          asterisk: token.term?.notes,
        })}
        onClick={() => terms.select(token.normalized)}
      >
        {token.token.text}
      </span>
      {token.token.post}
    </Fragment>
  );

  // const found = term.text.match(/['’]/);
  //
  // if (term.tags.includes('Possessive') && found) {
  //   const [apostrophe] = found;
  //   const [text, possesive] = term.text.split(/['’]/);
  //
  //   return (
  //     <>
  //       <Text text={text} />
  //       {apostrophe}
  //       {possesive}
  //     </>
  //   );
  // }
  //
  // console.log('TermView :: 66', term);
  //
  // return <Text text={term.text} />;
});
