import React from 'react';
import ReactDOM from 'react-dom/client';
import ProfileCard from './ProfileCard';

it('It should mount', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(<ProfileCard />);
  root.unmount();
});