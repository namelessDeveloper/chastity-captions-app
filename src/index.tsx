import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Routing from './Routing'

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
      <Routing/>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
