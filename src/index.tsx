import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {HashRouter} from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background:  black;
    color: white;
    font-family: sans-serif;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyle/>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
