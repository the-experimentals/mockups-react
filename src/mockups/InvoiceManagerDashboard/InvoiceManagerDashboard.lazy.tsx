import React, { lazy, Suspense, JSX } from 'react';

const LazyInvoiceManagerDashboard = lazy(() => import('./InvoiceManagerDashboard'));

const InvoiceManagerDashboard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyInvoiceManagerDashboard {...props} />
  </Suspense>
);

export default InvoiceManagerDashboard;
