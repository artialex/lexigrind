import { observer } from 'mobx-react-lite';

import { terms } from '@/stores/TermsStore.ts';

export const Terms = observer(() => {
  // const terms = useUnit($terms);
  // const selected = useUnit($selected);
  // const selectedData = useUnit($selectedData);

  return (
    <ul>
      {JSON.stringify(terms)}
      {/*
      {selected}
      {JSON.stringify(selectedData)}
      {Object.entries(terms).map(([id, term]) => (
        <li key={id}>
          {id}, {JSON.stringify(term)}
        </li>
      ))}
*/}
    </ul>
  );
});
