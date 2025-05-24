import React, { lazy, Suspense, JSX } from 'react';

const LazyLoadingIndicator = lazy(() => import('./LoadingIndicator'));

const LoadingIndicator = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLoadingIndicator {...props} />
  </Suspense>
);

export default LoadingIndicator;
