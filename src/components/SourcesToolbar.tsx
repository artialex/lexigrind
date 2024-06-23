import { Download, Plus, Upload } from 'react-feather';
import { Link } from 'react-router-dom';

import { Subheader } from '@/components/Subheader.tsx';
import { getSources } from '@/persistence/sources.pouch.ts';

export const SourcesToolbar = () => {
  const handleExport = async () => {
    const data = await getSources();

    console.log('SourcesToolbar :: 11', data);
  };

  const handleImport = () => {};

  return (
    <Subheader>
      <Link className="lexi-button" to="/sources/new">
        <Plus size="14" />
        Add new source
      </Link>

      <div className="ml-auto flex gap-2">
        <button className="lexi-button" onClick={handleExport}>
          <Download size="14" />
          Export
        </button>
        <button className="lexi-button" onClick={handleImport}>
          <Upload size="14" />
          Import
        </button>
      </div>
    </Subheader>
  );
};
