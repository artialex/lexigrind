import { makeAutoObservable } from 'mobx';

import { terms, TermsStore } from '@/modules/terms/stores/TermsStore.ts';

export class TokenStore {
  static of(token: Lexi.Token) {
    return new TokenStore(token, terms);
  }

  constructor(
    public token: Lexi.Token,
    private terms: TermsStore,
  ) {
    makeAutoObservable(this);
  }

  get normalized() {
    return this.token.text.toLowerCase();
  }

  get term() {
    if (!this.terms?.map?.has(this.normalized)) {
      return {
        level: 'unidentified',
        notes: null,
      };
    }

    return this.terms.map.get(this.normalized);
  }
}
