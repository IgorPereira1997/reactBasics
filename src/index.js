import React from "react";
import ReactDOM  from "react-dom";

import App from './components/App';

import GlobalStyle from './styles/global'

ReactDOM.render(
  // <h1 id="greetings">
  // <span>Olá, Mundo!</span>
  // </h1>,
  <React.Fragment>
    <GlobalStyle/>
    <App />
  </React.Fragment>,
  document.getElementById('root'),
);
