import { Route, Routes } from 'react-router-dom';

import { ReviewPage } from '@/modules/review/pages/ReviewPage.tsx';

export const ReviewRoutes = () => (
  <Routes>
    <Route path="/" element={<ReviewPage />} />
  </Routes>
);
