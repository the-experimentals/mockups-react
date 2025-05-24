import React, { lazy, Suspense, JSX } from 'react';

const LazyVerifyAccount = lazy(() => import('./VerifyAccount'));

const VerifyAccount = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyVerifyAccount {...props} />
  </Suspense>
);

export default VerifyAccount;
