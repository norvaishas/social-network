import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Subheader from './components/Subheader/Subheader';

function App() {
  return (
    <div className="app">
      <Header/>
      <Subheader/>
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;
