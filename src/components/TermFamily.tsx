import three from 'compromise';
import { useMemo } from 'react';

interface TermFamilyProps {
  term: string;
}

export function TermFamily(props: TermFamilyProps) {
  const data = useMemo(() => {
    const result = {};

    const doc = three(props.term);

    const json = doc.json();

    const tags = json.at(0)?.terms?.at(0)?.tags;

    if (tags.includes('Verb')) {
      console.clear();
      console.dir(doc.verbs().json());
      const verbs = doc.verbs();
      // const infinitive = doc.verbs().json().at(0).verb.infinitive;

      // @ts-ignore
      result.verb = {
        infinitive: verbs.toInfinitive().text(),
        past: verbs.toPastTense().text(),
        gerund: verbs.toGerund().text(),
        future: verbs.toFutureTense().text(),
      };
    }

    return result;
  }, [props.term]);

  return (
    <label htmlFor="">
      <div className="font-semibold">Family</div>
      <div className="text-xs">{JSON.stringify(data)}</div>
      {/*
      <pre className="text-xs">
        <ul>
          <li>{doc.verbs().toInfinitive().json()?.at(0)?.text}</li>
          <li>{doc.verbs().toPresentTense().json()?.at(0)?.text}</li>
          <li>{doc.verbs().toPastTense().json()?.at(0)?.text}</li>
          <li>{doc.verbs().toFutureTense().json()?.at(0)?.text}</li>
          <li>{doc.verbs().toGerund().json()?.at(0)?.text}</li>
        </ul>
      </pre>
*/}
    </label>
  );
}
