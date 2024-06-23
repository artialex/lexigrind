import { PropsWithChildren } from 'react';

export function Subheader(props: PropsWithChildren) {
  return (
    <div className="sticky top-8 z-50 flex h-8 items-center gap-4 border-b border-b-slate-200 bg-slate-50 px-4 py-1.5">
      {props.children}
    </div>
  );
}
