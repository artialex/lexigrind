export const TermsPage = () => (
  <div className="m-4 flex gap-4">
    Terms Page
    {/*
    {Array.from({ length: 6 }).map((_, level) => (
      <div className="basis-1/2">
        <h2 className="mb-2 text-xl">Level {level}</h2>
        <ul>
          {Array.from(terms.map.entries())
            .filter(([_, term]) => term.level === `${level}`)
            .map(([id]) => (
              <li key={id} className={`lexi-word-${level}`}>
                <a href={`/terms/${id}`}>{id}</a>
              </li>
            ))}
        </ul>
      </div>
    ))}
*/}
  </div>
);
