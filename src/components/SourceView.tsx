import { observer } from 'mobx-react-lite';

import { FragmentsView } from './FragmentsView.tsx';

export const SourceView = observer<{ source: Lexi.Source }>(({ source }) => {
  return (
    <div>
      <FragmentsView fragments={source.fragments} />
    </div>
  );
});
