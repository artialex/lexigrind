import { makeAutoObservable } from 'mobx';
import { nanoid } from 'nanoid';

import { TextStatsStore } from '@/modules/stats/TextStatsStore.ts';
import { Texts } from '@/modules/util.text/texts.ts';

import { FragmentFormStore } from './FragmentFormStore';

export class SourceFormStore {
  static of(source?: Lexi.Source) {
    return new SourceFormStore(source);
  }

  title = '';
  author = '';
  tags = [];

  fragments: FragmentFormStore[] = [FragmentFormStore.of()];

  selected = 0;

  stats = new TextStatsStore();

  constructor(private source?: Lexi.Source) {
    makeAutoObservable(this);

    if (source) {
      this.title = source.title;
      this.author = source.author;
      this.fragments = source.fragments.map(FragmentFormStore.of);
      this.stats.replace(source.stats);
    }
  }

  setTitle(title: string) {
    this.title = title;
  }

  setAuthor(author: string) {
    this.author = author;
  }

  selectFragment(index: number) {
    this.selected = index;
  }

  addFragment() {
    this.selected = this.fragments.push(new FragmentFormStore()) - 1;
  }

  removeFragment(index: number) {
    this.fragments.splice(index, 1);
    this.selected = Math.min(this.selected, this.fragments.length - 1);
  }

  async toSourceDTO() {
    const whole = this.fragments.map((_) => _.content).join('\n\n');
    const stats = await Texts.normalizeNStats(whole);
    const fragments = await Promise.all(this.fragments.map((_) => _.toFragmentDTO()));

    return {
      _id: this.source?._id ?? nanoid(),
      title: this.title,
      author: this.author,
      tags: this.tags,
      fragments,
      stats,
    };
  }

  get isCalculating() {
    return this.fragments?.some((_) => _.isCalculating) ?? false;
  }
}
