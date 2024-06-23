import { ChevronLeft, ChevronRight } from 'react-feather';

interface PaginationProps {
  page: string | null;
  setPage: (page: string) => void;
}

export function Pagination({ page, setPage }: PaginationProps) {
  return (
    <div className="mt-4 flex justify-center gap-4">
      <button className="inline-flex w-6 items-center justify-center rounded bg-slate-100 transition hover:bg-slate-200">
        <ChevronLeft size="14" />
      </button>
      <button
        className="inline-flex w-6 items-center justify-center rounded bg-slate-100 transition hover:bg-slate-200"
        onClick={() => {
          setPage('0');
        }}
      >
        1
      </button>
      <button
        className="inline-flex w-6 items-center justify-center rounded bg-slate-100 transition hover:bg-slate-200"
        onClick={() => {
          setPage('1');
        }}
      >
        2
      </button>
      <button
        className="inline-flex w-6 items-center justify-center rounded bg-slate-100 transition hover:bg-slate-200"
        onClick={() => {
          setPage('2');
        }}
      >
        3
      </button>

      <button className="inline-flex w-6 items-center justify-center rounded bg-slate-100 transition hover:bg-slate-200">
        4
      </button>
      <button className="inline-flex w-6 items-center justify-center rounded bg-slate-100 transition hover:bg-slate-200">
        <ChevronRight size="14" />
      </button>
    </div>
  );
}
