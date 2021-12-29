import ParticlesBg from 'particles-bg';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <ParticlesBg type="cobweb" />
  </BrowserRouter>,

  document.getElementById('root')
);
