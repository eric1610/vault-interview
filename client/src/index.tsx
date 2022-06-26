import React from 'react';
import ReactDOM from 'react-dom/client';
import Store from './Store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Store />
  </React.StrictMode>
);
