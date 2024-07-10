import { Outlet } from 'react-router-dom';

import { NavBar } from '@/modules/ui/components/NavBar.tsx';

export function PageLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
