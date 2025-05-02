import React from 'react';
import ReactDOM from 'react-dom/client';
import NewProfilePanel from './NewProfilePanel';

it('It should mount', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(<NewProfilePanel />);
  root.unmount();
});