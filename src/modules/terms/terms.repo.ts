import { PouchRepository } from '@/modules/persistence/pouch.repo.ts';

export class TermsRepository extends PouchRepository<Lexi.Term> {
  constructor(options?: { test: boolean }) {
    super('terms', options);
  }
}

export const termsRepo = new TermsRepository();
