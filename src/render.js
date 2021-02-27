import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { postsUpdate } from './myRedux/state'; // это циклический импорт и его надо бы убрать (l-33)

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} postsUpdate={postsUpdate} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
