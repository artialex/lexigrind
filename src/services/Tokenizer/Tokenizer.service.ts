import debug from 'debug';

import { compromiseThree } from '@/services/Tokenizer/compromise/three.ts';

import ThreeWorker from './compromise/three.worker?worker';

const trace = debug('lexigrind:tokenizer');

export class Tokenizer {
  static async tokenize(text: string): Promise<ReturnType<typeof compromiseThree>> {
    return new Promise((resolve) => {
      resolve(compromiseThree(text));
    });
  }

  static async three(text: string): Promise<Lexi.TextStats> {
    trace('tokenize', 'started');

    return new Promise((resolve) => {
      const worker = new ThreeWorker();

      worker.postMessage(text);

      worker.onmessage = (e) => {
        resolve(e.data);
        trace('tokenize', 'ended');
        worker.terminate();
      };
    });
  }
}

// type TokenizationLevel = 'paragraphs' | 'words' | 'unique-words' | 'adjectives';
// export async function tokenize(text: string, levels: TokenizationLevel[]) {}

/*

export class TokenizerC {
  private doc: ReturnType<typeof nlp>;

  public static from(text: string, vocabulary: Map<string, any>) {
    return new Tokenizer(text, vocabulary);
  }

  public static tokenize(
    text: string,
    cb: (data: ReturnType<typeof process>) => void,
  ) {
    return tokenize(text, cb);
  }

  private constructor(
    text: string,
    private vocabulary: Map<string, any>,
  ) {
    this.doc = nlp<StatsMethods>(text);
  }

  // -- Text Stats -------------------------------------------------------------

  public get paragraphs() {
    return this.doc.paragraphs();
  }

  public get paragraphCount() {
    return this.paragraphs.length;
  }

  public get sentences() {
    return this.doc.sentences();
  }

  public get sentenceCount() {
    return [this.doc.sentences().length, this.doc.length];
  }

  public get words() {
    const json = this.doc.unigrams() as UnigramArray;

    return json.reduce<Record<string, number>>((acc, cur) => {
      acc[cur.normal] = cur.count;
      return acc;
    }, {});
  }

  public get wordCount() {
    return this.doc.wordCount();
  }

  public get uniqueWords() {
    const json = this.doc.unique().out('json') as CompromiseJsonOutput;

    return json.flatMap((_) => _.terms.map((_) => _.normal));
  }

  public get uniqueWordCount() {
    return this.doc.unique().wordCount();
  }

  public get text() {
    return {
      paragraphs: this.paragraphs,
      paragraphCount: this.paragraphCount,
      sentences: this.sentences,
      sentenceCount: this.sentenceCount,
    };
  }

  // -- Personal Stats ---------------------------------------------------------

  public wordsBy(level: Level) {
    return new Set(
      _.intersection(
        Object.keys(this.words),
        Array.from(this.vocabulary)
          .filter(([id, term]) => term.level === level)
          .map(([id]) => id),
      ),
    );
  }

  public get commonWords() {
    return this.wordsBy('0');
  }

  public get commonWordCount() {
    return this.commonWords.size;
  }

  // -- Parts of speech --------------------------------------------------------

  public get nouns() {}

  public get pronouns() {}

  public get verbs() {}

  public get adjectives() {}

  public get adverbs() {}

  public get prepositions() {}

  public get conjunctions() {}

  public get interjections() {}
}

interface Unigram {
  normal: string;
  count: number;
  size: number;
}

type UnigramArray = Unigram[];

interface CompromiseTermEntry {
  text: string;
  normal: string;
  pre: string;
  post: string;
  tags: string[];
}

interface CompromiseJsonEntry {
  text: string;
  terms: CompromiseTermEntry[];
}

type CompromiseJsonOutput = CompromiseJsonEntry[];

/!*
chapter
  info
    paragraphs
    paragraphCount
    sentences
    sentenceCount
    words Map<word, count> Unigram
    wordCount
  parts
    nouns
    pronouns
    verbs
    adjectives
    adverbs
    prepositions
    conjunctions
    interjections
  personal
    ignoredWords
    ignoredWordCount
    commonWords
    commonWordCount
    uncommonWords
    uncommonWordCount
    rareWords
    rareWordCount
    legendaryWords
    legendaryWordCount
    epicWords
    epicWordCount
    mythicWords
    mythicWordCount
    unidentifiedWords
    unidentifiedWordCount
 *!/
*/
