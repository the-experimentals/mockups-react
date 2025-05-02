import React from 'react';
import { createRoot } from 'react-dom/client';
import MusicStore from './MusicStore';

it('It should mount', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<MusicStore />);
  root.unmount();
});