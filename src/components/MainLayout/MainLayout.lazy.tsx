import React, { lazy, Suspense } from 'react';

const LazyMainLayout = lazy(() => import('./MainLayout'));

const MainLayout = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    {/* <LazyMainLayout {...props} /> */}
  </Suspense>
);

export default MainLayout;
