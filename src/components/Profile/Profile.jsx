import React from 'react';
import style from './Profile.module.css';
import Posts from './Posts/Posts';

const Profile = () => {
  return (
    <section className={style.profile}>
      <h2>Hey world!</h2>
      <Posts/>
    </section>
  )
}

export default Profile;
