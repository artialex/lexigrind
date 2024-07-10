import { PouchRepository } from '@/modules/persistence/pouch.repo.ts';

export class SourcesRepository extends PouchRepository<Lexi.Source> {
  constructor(options?: { test: boolean }) {
    super('sources', options);
  }

  async retrieveFragment(sourceId: string, fragmentId: string) {
    const response = await this.retrieve(sourceId);

    return response.fragments.find((_) => _._id === fragmentId);
  }
}

export const sourcesRepo = new SourcesRepository();
