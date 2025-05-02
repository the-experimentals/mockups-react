import React, { lazy, Suspense, JSX } from 'react';

const LazyTaskBoards = lazy(() => import('./TaskBoards'));

const TaskBoards = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTaskBoards {...props} />
  </Suspense>
);

export default TaskBoards;
