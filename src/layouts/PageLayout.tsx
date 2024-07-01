import { Outlet } from 'react-router-dom';

import { NavBar } from '@/components/NavBar.tsx';

export function PageLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
