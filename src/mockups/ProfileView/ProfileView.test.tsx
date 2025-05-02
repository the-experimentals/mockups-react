import React from 'react';
import { createRoot } from 'react-dom/client';
import ProfileView from './ProfileView';

it('It should mount', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<ProfileView />);
  root.unmount();
});