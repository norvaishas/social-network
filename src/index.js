import './index.css';
import store from './Redux/redux-store';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';


const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  rerenderEntireTree(store.getState())
});
