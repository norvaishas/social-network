import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Subheader from './components/Subheader/Subheader';
import Dialogs from './components/Dialogs/Dialogs';

const posts = [
  {text: 'Post 1'},
  {text: 'Post 2'},
  {text: 'Post 3'},
  {text: 'Post 4'},
  {text: 'Post 5'},
  {text: 'Post 6'},
  {text: 'Post 7'}
]

function App() {
  return (
    <div className="app">
      <Header/>
      <Subheader/>
      <Navbar/>
      <div className='content'>
        <Profile posts={posts}/>
        <Dialogs/>
      </div>
    </div>
  );
}

export default App;
