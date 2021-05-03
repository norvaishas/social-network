import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/containers/profile-container';
import Subheader from './components/Subheader/Subheader';
import DialogsContainer from './components/containers/dialogs-container';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UsersContainer from './components/containers/users-container';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Subheader/>
        <Navbar/>
        <div className='content'>
          <Route exact path='/home' render={() => <ProfileContainer/>}/>
          <Route exact path='/dialogs' render={() => <DialogsContainer/>}/>
          <Route exact path='/music' render={() => <div>My music</div>}/>
          <Route exact path='/friends' render={() => <UsersContainer/>}/>
          <Route exact path='/video' component={() => <div>My favorite videos</div>}/>
          <Route exact path='/some' component={() => <div>My some</div>}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
