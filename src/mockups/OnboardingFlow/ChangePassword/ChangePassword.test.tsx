import React from 'react';
import { createRoot } from 'react-dom/client';
import ChangePassword from './ChangePassword';

it('It should mount', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<ChangePassword />);
  root.unmount();
});