import three from 'compromise/three';

// FIXME: find these types in compromise?

export type CompromiseView = ReturnType<typeof three>;

export type CompromiseTerm = { text: string; pre: string; post: string; tags: string[] };

export type CompromiseJson = { terms: CompromiseTerm[] }[];

export class Compromise {
  static POSSESSIVE = /['’]/;

  static getSentenceCount(view: CompromiseView) {
    return view.length;
  }

  static getWordCount(view: CompromiseView) {
    return view.wordCount();
  }

  static getUniqueWords(view: CompromiseView) {
    const json = view.terms().unique().json() as CompromiseJson;

    return json
      .flatMap((_) => _.terms)
      .reduce<CompromiseTerm[]>(this.resolveTokenizationInconsistencies, [])
      .map((_) => _.text.toLowerCase());
  }

  /**
   * FIXME: split into several functions?
   */
  private static resolveTokenizationInconsistencies(acc: CompromiseTerm[], cur: CompromiseTerm) {
    if (cur.pre.includes('“') && cur.post.includes('”')) {
      cur.tags.push('speech');
    }

    if (
      (cur.pre.includes('“') || acc[acc.length - 1]?.tags.includes('speech')) &&
      !acc[acc.length - 1]?.post.includes('”')
    ) {
      cur.tags.push('speech');
    }

    if (cur.text === '') {
      acc[acc.length - 1].post += cur.post;
    } else if (cur.text.match(Compromise.POSSESSIVE) && cur.tags.includes('Possessive')) {
      const apostrophe = cur.text.match(Compromise.POSSESSIVE);
      const [text, possessive] = cur.text.split(Compromise.POSSESSIVE);

      cur.text = text;
      cur.post = apostrophe + possessive + cur.post;
      acc.push(cur);
    } else if (cur.text.includes('—')) {
      if (acc[acc.length - 1]?.post) {
        acc[acc.length - 1].post += cur.text;
      }
    } else {
      acc.push(cur);
    }

    return acc;
  }

  static getTokens(view: CompromiseView) {
    const json = view.json() as CompromiseJson;

    return json //
      .flatMap((_) => _.terms)
      .reduce<CompromiseTerm[]>(this.resolveTokenizationInconsistencies, []);
  }
}
