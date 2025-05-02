import React from 'react';
import { createRoot } from 'react-dom/client';
import Finish from './Finish';

it('It should mount', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<Finish />);
  root.unmount();
});