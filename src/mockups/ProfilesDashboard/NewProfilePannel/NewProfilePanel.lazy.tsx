import React, { lazy, Suspense, JSX } from 'react';

const LazyNewProfilePanel = lazy(() => import('./NewProfilePanel'));

const NewProfilePanel = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNewProfilePanel {...props} />
  </Suspense>
);

export default NewProfilePanel;
