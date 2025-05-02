import React, { lazy, Suspense, JSX } from 'react';

const LazyProfileCard = lazy(() => import('./ProfileCard'));

const ProfileCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProfileCard {...props} />
  </Suspense>
);

export default ProfileCard;
