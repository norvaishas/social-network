import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Subheader from './components/subheader/Subheader';

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
