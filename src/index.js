import './index.css';
import store from './Redux/redux-store';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';


const rerenderEntireTree = (state) => {
  console.log(state)
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
           dispatch={store.dispatch}
           // lastMessages={store.getLastMessages()} метод из my-store
           lastMessages={store.getState().messenger.dialogs.map(dialog => dialog.messages[0])}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  rerenderEntireTree(store.getState())
});
