import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Subheader from './components/Subheader/Subheader';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App({ state, dispatch, lastMessages }) {
  const { wall, messenger } = state;
  const {posts, currentPostText} = wall;
  const { dialogs, selectedDialog } = messenger;
  return (
    <Router>
      <div className="app">
        <Header/>
        <Subheader/>
        <Navbar/>
        <div className='content'>
          <Route exact path='/home' render={() =>
            <Profile
              posts={posts}
              dispatch={dispatch}
              currentPostText={currentPostText}/>}
          />
          <Route exact
                 path='/dialogs'
                 render={() =>
                   <Dialogs
                     lastMessages={lastMessages}
                     selectedDialog={selectedDialog}
                     dispatch={dispatch}
                   />}/>
          <Route exact path='/music' render={() => <div>My music</div>}/>
          <Route exact path='/friends' render={() => <div>Friends list</div>}/>
          <Route exact path='/video' component={() => <div>My favorite videos</div>}/>
          <Route exact path='/some' component={() => <div>My some</div>}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
