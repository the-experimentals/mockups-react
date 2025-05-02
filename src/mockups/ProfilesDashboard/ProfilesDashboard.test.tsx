import React from 'react';
import { createRoot } from 'react-dom/client';
import ProfilesDashboard from './ProfilesDashboard';

it('It should mount', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<ProfilesDashboard />);
  root.unmount();
});