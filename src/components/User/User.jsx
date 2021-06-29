import React from 'react';
import Preloader from '../Preloader/Preloader';
import style from './User.module.css';

const User = ({followUser, unFollowUser, users, loading}) => {
  if (loading) {
    return <Preloader/>
  }

  return (
    users.map(user => {

      const avatar = user.photos.small
        ? <img className={style.avatar} src={user.photos.small} alt={user.name}/>
        : user.name[0].toUpperCase();

      return (
        <div className={style.userCard} key={user.id}>
          <div className="info">
            <h3 className="login">{user.name}</h3>
          </div>
          <div className={style.avatar}>
            {avatar}
          </div>
          <div className={style.buttons}>
            <button onClick={user.followed
              ? () => unFollowUser(user.id)
              : () => followUser(user.id)}>
              {user.followed ? 'Unfollow' : 'Follow'}
            </button>
            <button>Message</button>
          </div>
        </div>
      )
    })
  )
}

export default User;
