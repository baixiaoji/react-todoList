import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//不要是. ..打头的引用都是去node_modules里找
import 'bulma/css/bulma.css';

ReactDOM.render(
  <div className="hero is-dark is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">
          Hello world
        </h1>
        <h2 className="subtitle">
          learn-react
        </h2>
      </div>
    </div>
  </div>,
  document.getElementById('root')
);