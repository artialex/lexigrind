import { makeAutoObservable } from 'mobx';

export class TextStatsStore {
  paragraphCount = 0;
  sentenceCount = 0;
  wordCount = 0;
  uniqueWords: string[] = [];

  constructor(stats?: Lexi.TextStats) {
    makeAutoObservable(this);

    if (stats) {
      this.replace(stats);
    }
  }

  replace(stats: Lexi.TextStats) {
    this.paragraphCount = stats.paragraphCount;
    this.sentenceCount = stats.sentenceCount;
    this.wordCount = stats.wordCount;
    this.uniqueWords = stats.uniqueWords;
  }

  get uniqueWordCount() {
    return this.uniqueWords.length;
  }
}
