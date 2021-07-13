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
          <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
          <Route path='/dialogs' render={() => <DialogsContainer/>}/>
          <Route path='/music' render={() => <div>My music</div>}/>
          <Route path='/friends' render={() => <UsersContainer/>}/>
          <Route path='/video' component={() => <div>My favorite videos</div>}/>
          <Route path='/some' component={() => <div>My some</div>}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
