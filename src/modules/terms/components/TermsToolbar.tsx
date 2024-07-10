import { ChangeEvent, useRef } from 'react';
import { Download, Upload } from 'react-feather';
import { Link } from 'react-router-dom';

import { Files } from '@/modules/platform.browser/files.ts';
import { termsRepo } from '@/modules/terms/terms.repo.ts';
import { Toolbar } from '@/modules/ui/components/Toolbar.tsx';

export const TermsToolbar = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleExport = async () => {
    Files.download(await termsRepo.dump(), `terms-${new Date().toISOString()}.json`);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    Files.upload(file, (result) => {
      if (result) {
        void termsRepo.populate(JSON.parse(result));
      }
    });
  };

  const handleImport = () => {
    fileInputRef.current?.click();
  };

  return (
    <Toolbar>
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
    </Toolbar>
  );
};
