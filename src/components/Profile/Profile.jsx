import React from 'react';
import style from './Profile.module.css';
import Posts from '../Posts/Posts';
import SubmitPost from '../SubmitPost/SubmitPost';

const Profile = ({posts, dispatch, addPost, updateTextPost, currentPostText}) => {
  return (
    <section className={style.profile}>
      <h2>Hey world!</h2>
      <SubmitPost
        dispatch={dispatch}
        addPost={addPost}
        updateTextPost={updateTextPost}
        currentPostText={currentPostText}
      />
      <Posts posts={posts}/>
    </section>
  )
}

export default Profile;
