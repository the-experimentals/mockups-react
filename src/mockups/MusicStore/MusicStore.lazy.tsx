import React, { lazy, Suspense, JSX } from 'react';

const LazyMusicStore = lazy(() => import('./MusicStore'));

const MusicStore = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMusicStore {...props} />
  </Suspense>
);

export default MusicStore;
