import React, {useEffect} from 'react';
import style from './Profile.module.css';
import Posts from '../Posts/Posts';
import SubmitPostContainer from '../submit-post-container/submit-post-container';
import Preloader from '../Preloader/Preloader';

const Profile = ({posts, profile, clearUserProfile}) => {

  useEffect(() => {
    console.log('Компонент Profile Обновился');
    return () => {
      console.log('Компонент Profile Удалился');
      clearUserProfile();
    }
  }, []);

  if (!profile) {
    return <Preloader/>
  }

  const avatar = profile.photos.large
    ? profile.photos.large
    : "http://dummyimage.com/150x150.png/ff4444/ffffff";
  return (
    <section className={style.profile}>
      <h2>{profile.fullName}</h2>
      <p>{profile.aboutMe}</p>
      <img src={avatar} alt={profile.fullName} className={style.ava}/>
      <SubmitPostContainer />
      <Posts posts={posts}/>
    </section>
  )
}

export default Profile;
