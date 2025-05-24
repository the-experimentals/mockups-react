import React from 'react';
import { createRoot } from 'react-dom/client';
import LoadingIndicator from './LoadingIndicator';

it('It should mount', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<LoadingIndicator />);
  root.unmount();
});