import { SourcesToolbar } from '../components/SourcesToolbar.tsx';
import { SourcesView } from '../components/SourcesView.tsx';

export const SourcesPage = () => (
  <div>
    <SourcesToolbar />
    <div className="m-4">
      <SourcesView />
    </div>
  </div>
);
