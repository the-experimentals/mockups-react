import React from 'react';
import { createRoot } from 'react-dom/client';
import LoginPage from './LoginPage';

it('It should mount', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<LoginPage />);
  root.unmount();
});