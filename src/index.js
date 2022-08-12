import React from 'react';
import ReactDOM from 'react-dom';
import App from '@routes/App';
import { BrowserRouter } from 'react-router-dom';

import './sass/styles.sass';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
