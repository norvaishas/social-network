import React from 'react';
import style from './Profile.module.css';
import Posts from '../Posts/Posts';
import SubmitPostContainer from '../submit-post-container/submit-post-container';

const Profile = ({store}) => {
  return (
    <section className={style.profile}>
      <h2>Hey world!</h2>
      <SubmitPostContainer store={store}/>
      <Posts posts={store.getState().wall.posts}/>
    </section>
  )
}

export default Profile;
