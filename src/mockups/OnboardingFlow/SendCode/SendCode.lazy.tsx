import React, { lazy, Suspense, JSX } from 'react';

const LazySendCode = lazy(() => import('./SendCode'));

const SendCode = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySendCode {...props} />
  </Suspense>
);

export default SendCode;
