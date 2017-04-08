import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
//不要是. ..打头的引用都是去node_modules里找
import 'bulma/css/bulma.css';
import Welcome from './Welcome.js';
// const Welcome = require("./Welcome.js")
const ele = <Welcome name="baiji" />
function tick() {
  ReactDOM.render(
    <div className="hero is-dark is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        {ele} 
        <h2 className="subtitle">
          任务三 {new Date().toLocaleTimeString()}
        </h2>
      </div>
    </div>
  </div>,
    document.getElementById('root')
  );
}
setInterval(tick, 1000);
