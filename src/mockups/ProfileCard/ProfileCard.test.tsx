import React from 'react';
import { createRoot } from 'react-dom/client';
import ProfileCard from './ProfileCard';

it('It should mount', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<ProfileCard />);
  root.unmount();
});