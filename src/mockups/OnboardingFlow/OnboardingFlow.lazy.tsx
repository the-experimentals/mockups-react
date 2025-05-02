import React, { lazy, Suspense, JSX } from 'react';

const LazyOnboardingFlow = lazy(() => import('./OnboardingFlow'));

const OnboardingFlow = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyOnboardingFlow {...props} />
  </Suspense>
);

export default OnboardingFlow;
