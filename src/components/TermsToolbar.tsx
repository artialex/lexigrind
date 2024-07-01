import { ChangeEvent, useRef } from 'react';
import { Download, Upload } from 'react-feather';
import { Link } from 'react-router-dom';

import { Subheader } from '@/components/Subheader.tsx';
import { getAllTerms, upsertMany } from '@/persistence/terms.pouch.ts';
import { Files } from '@/utils/files.ts';

export const TermsToolbar = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleExport = async () => {
    const data = await getAllTerms();

    Files.download(JSON.stringify(data), 'terms.json');
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    Files.upload(file, (result) => {
      if (result) {
        void upsertMany(JSON.parse(result));
      }
    });
  };

  const handleImport = () => {
    fileInputRef.current?.click();
  };

  return (
    <Subheader>
      <Link to="/terms/ignored" className="lexi-button">
        Ignored terms
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
        <input type="file" hidden ref={fileInputRef} onChange={handleFileChange} />
      </div>
    </Subheader>
  );
};
