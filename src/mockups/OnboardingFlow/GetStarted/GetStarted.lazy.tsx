import React, { lazy, Suspense, JSX } from 'react';

const LazyGetStarted = lazy(() => import('./GetStarted'));

const GetStarted = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyGetStarted {...props} />
  </Suspense>
);

export default GetStarted;
