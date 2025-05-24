import React, { lazy, Suspense, JSX } from 'react';

const LazyFinish = lazy(() => import('./Finish'));

const Finish = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFinish {...props} />
  </Suspense>
);

export default Finish;
