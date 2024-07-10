import debounce from 'lodash/debounce';
import { toJS, makeAutoObservable } from 'mobx';
import { nanoid } from 'nanoid';

import { TextStatsStore } from '@/modules/stats/TextStatsStore.ts';
import { Texts } from '@/modules/util.text/texts.ts';

export class FragmentFormStore {
  static of(fragment?: Lexi.Fragment) {
    return new FragmentFormStore(fragment);
  }

  title = '';
  content = '';
  stats = new TextStatsStore();
  isCalculating = false;

  constructor(private fragment?: Lexi.Fragment) {
    makeAutoObservable(this);

    if (fragment) {
      this.title = fragment.title;
      this.content = fragment.content;
      this.stats = new TextStatsStore(fragment.stats);
    }
  }

  setTitle(title: string) {
    this.title = title;
  }

  setContent(content: string) {
    this.content = content;

    this.isCalculating = true;
    this.updateStats();
  }

  setStats(stats: Lexi.TextStats) {
    this.stats.replace(stats);
    this.isCalculating = false;
  }

  updateStats = debounce(async () => {
    this.setStats(await Texts.normalizeNStats(this.content));
  }, 500);

  async toFragmentDTO() {
    return {
      _id: this.fragment?._id ?? nanoid(),
      title: this.title,
      content: await Texts.normalize(this.content),
      stats: toJS(this.stats),
    };
  }

  async toSourceDTO(source: Lexi.Source) {
    const index = source.fragments.findIndex((_) => _._id === this.fragment!._id);

    source.fragments[index] = await this.toFragmentDTO();

    const whole = source.fragments.map((_) => _.content).join('\n\n');

    source.stats = await Texts.normalizeNStats(whole);

    return source;
  }
}
