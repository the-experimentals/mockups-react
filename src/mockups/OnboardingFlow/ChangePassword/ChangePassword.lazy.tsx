import React, { lazy, Suspense, JSX } from 'react';

const LazyChangePassword = lazy(() => import('./ChangePassword'));

const ChangePassword = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyChangePassword {...props} />
  </Suspense>
);

export default ChangePassword;
