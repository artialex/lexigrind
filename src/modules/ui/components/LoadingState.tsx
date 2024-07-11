import { Loader } from 'react-feather';

export const LoadingState = () => (
  <div className="flex flex-grow animate-pulse  items-center justify-center">
    <Loader size="24" className="animate-ping" />
  </div>
);
