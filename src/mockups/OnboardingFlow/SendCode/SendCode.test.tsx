import React from 'react';
import { createRoot } from 'react-dom/client';
import SendCode from './SendCode';

it('It should mount', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<SendCode />);
  root.unmount();
});