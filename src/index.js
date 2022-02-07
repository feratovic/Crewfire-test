import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './pages/App';
import {PublicProvider} from './context/PublicContext';

ReactDOM.render(
  <React.StrictMode>
    <PublicProvider>
      <App />
    </PublicProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
