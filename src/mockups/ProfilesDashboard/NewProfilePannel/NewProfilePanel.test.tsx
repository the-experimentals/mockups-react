import React from 'react';
import { createRoot } from 'react-dom/client';
import NewProfilePanel from './NewProfilePanel';

it('It should mount', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<NewProfilePanel />);
  root.unmount();
});