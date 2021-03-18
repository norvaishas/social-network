import './index.css';
import store from './Redux/redux-store';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import StoreContext from './store-context';


const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  rerenderEntireTree(store.getState())
});
