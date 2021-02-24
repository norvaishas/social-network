import React from 'react';
import style from './Profile.module.css';
import Posts from './Posts/Posts';

const Profile = (props) => {
  debugger
  return (
    <section className={style.profile}>
      <h2>Hey world!</h2>
      <Posts posts={props.posts}/>
    </section>
  )
}

export default Profile;
