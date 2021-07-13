import React, {useEffect} from 'react';
import Profile from './Profile';
import axios from 'axios';

const ProfileAPI = ({posts, profile, setUserProfile, clearUserProfile, match}) => {
  let {userId} = match.params;

  if (!userId) {
    userId = 18214;
  }

  useEffect(() => {
    console.log('USE_EFFECT Profile-API (запрос данных профиля)')
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        setUserProfile(response.data);
      })
      .catch(err => alert(err))
  }, [match]);

  return <Profile posts={posts} profile={profile} clearUserProfile={clearUserProfile}/>
}

export default ProfileAPI;
