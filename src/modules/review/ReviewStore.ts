import { sampleSize } from 'lodash';
import { makeAutoObservable } from 'mobx';

import { Level } from '@/constants/levels.ts';
import { TermStore } from '@/stores/TermStore.ts';
import { terms, TermsStore } from '@/stores/TermsStore.ts';

type Status = 'unreviewed' | 'unknown' | 'known';

export class ReviewStore {
  static of() {
    return new ReviewStore(terms);
  }

  level: Level = '0';
  finished = false;

  reviewedTerms: { term: TermStore; status: Status }[] | null = null;
  current = 0;

  constructor(private terms: TermsStore) {
    makeAutoObservable(this);
  }

  get currentTerm() {
    return this.reviewedTerms?.at(this.current);
  }

  populate(level: Level) {
    this.level = level;

    const array = Array.from(this.terms.map);

    const termsWithNotes = array.filter(([, term]) => term.level === level && term.notes);

    this.reviewedTerms = sampleSize(termsWithNotes, 10).map(([, term]) => ({
      term,
      status: 'unreviewed',
    }));
  }

  mark(status: Status) {
    const item = this.reviewedTerms?.at(this.current);

    if (item) {
      item.status = status;
    }

    this.next();
  }

  back() {
    this.reviewedTerms = null;
  }

  next() {
    if (this.current === this.reviewedTerms!.length - 1) {
      this.finished = true;
    } else {
      ++this.current;
    }
  }
}
