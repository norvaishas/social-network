import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { postsUpdate } from './myRedux/state';

ReactDOM.render(
  <React.StrictMode>
    <App state={state} postsUpdate={postsUpdate} />
  </React.StrictMode>,
  document.getElementById('root')
);
