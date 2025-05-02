import React from 'react';
import { createRoot } from 'react-dom/client';
import HistoryTab from './HistoryTab';

it('It should mount', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<HistoryTab />);
  root.unmount();
});