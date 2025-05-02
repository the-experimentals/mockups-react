import React, { lazy, Suspense, JSX } from 'react';

const LazyMainLayout = lazy(() => import('./MainLayout'));

const MainLayout = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    {/* <LazyMainLayout {...props} /> */}
  </Suspense>
);

export default MainLayout;
