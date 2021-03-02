import './index.css';
import store from './myRedux/state';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';


const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
           postsUpdate={store.postsUpdate.bind(store)}
           postTextUpdate={store.postTextUpdate.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
