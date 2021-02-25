import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Subheader from './components/Subheader/Subheader';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Subheader/>
        <Navbar/>
        <div className='content'>
          <Route exact path='/home' component={Profile}/>
          <Route exact path='/dialogs' component={Dialogs}/>
          <Route exact path='/music' component={() => <div>My music</div>}/>
          <Route exact path='/friends' component={() => <div>Friends list</div>}/>
          <Route exact path='/video' component={() => <div>My favorite videos</div>}/>
          <Route exact path='/some' component={() => <div>My some</div>}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
