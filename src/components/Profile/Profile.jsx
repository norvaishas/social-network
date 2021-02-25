import React from 'react';
import style from './Profile.module.css';
import Posts from '../Posts/Posts';

const posts = [
  {text: 'Post 1'},
  {text: 'Post 2'},
  {text: 'Post 3'},
  {text: 'Post 4'},
  {text: 'Post 5'},
  {text: 'Post 6'},
  {text: 'Post 7'}
]

const Profile = () => {
  return (
    <section className={style.profile}>
      <h2>Hey world!</h2>
      <Posts posts={posts}/>
    </section>
  )
}

export default Profile;
