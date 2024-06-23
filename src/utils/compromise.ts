import one from 'compromise/one';

type View = ReturnType<typeof one>;

export function getSentenceCount(view: View) {
  return view.length;
}

export function getWordCount(view: View) {
  return view.wordCount();
}

export function getUniqueWords(view: View) {
  const json = view.terms().unique().json() as Array<{
    terms: Array<{ text: string; tags: string[] }>;
  }>;

  return json
    .flatMap((_) =>
      _.terms.map((_) => {
        const found = _.text.match(/['’]/);

        if (_.tags.includes('Possessive') && found) {
          const [text] = _.text.split(/['’]/);
          return text;
        }
        return _.text;
      }),
    )
    .filter(Boolean)
    .map((_) => _.toLowerCase());
}
