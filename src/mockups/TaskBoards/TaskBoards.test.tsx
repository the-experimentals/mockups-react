import React from 'react';
import { createRoot } from 'react-dom/client';
import TaskBoards from './TaskBoards';

it('It should mount', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<TaskBoards />);
  root.unmount();
});