import React from 'react';
import { createRoot } from 'react-dom/client';
import PermissionsTab from './PermissionsTab';

it('It should mount', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<PermissionsTab />);
  root.unmount();
});