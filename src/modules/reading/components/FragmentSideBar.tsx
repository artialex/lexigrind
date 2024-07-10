import { SelectedTerm } from '@/modules/reading/components/SelectedTerm.tsx';

export function FragmentSideBar() {
  return (
    <aside className="sticky inset-0 bottom-0 right-0 top-16 h-[calc(100vh-2rem)] self-start border-l bg-slate-50 p-2">
      <SelectedTerm />
    </aside>
  );
}
