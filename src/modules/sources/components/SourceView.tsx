import { observer } from 'mobx-react-lite';

import { FragmentsView } from './FragmentsView.tsx';

export const SourceView = observer<{ source: Lexi.Source }>(({ source }) => {
  return <FragmentsView fragments={source.fragments} />;
});
