import './index.css';
import state, {postsUpdate, postTextUpdate, subscribe} from './myRedux/state';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';


const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} postsUpdate={postsUpdate} postTextUpdate={postTextUpdate}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
