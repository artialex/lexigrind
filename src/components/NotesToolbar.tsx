import { ChangeEvent, useRef } from 'react';
import { Download, Plus, Upload } from 'react-feather';
import { Link } from 'react-router-dom';

import { Subheader } from '@/components/Subheader.tsx';
import { notesRepo } from '@/persistence/notes.pouch.ts';
import { Files } from '@/utils/files.ts';

export const NotesToolbar = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleExport = async () => {
    Files.download(await notesRepo.dump(), 'terms.json');
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    Files.upload(file, (result) => {
      if (result) {
        void notesRepo.populate(JSON.parse(result));
      }
    });
  };

  const handleImport = () => {
    fileInputRef.current?.click();
  };

  return (
    <Subheader>
      <Link className="lexi-button" to="/notes/new">
        <Plus size="14" />
        Add new note
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
