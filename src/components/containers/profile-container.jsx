import React from 'react';
import StoreContext from '../../store-context';
import Profile from '../Profile/Profile';

const ProfileContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          return (
            <Profile posts={store.getState().wall.posts} />
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default ProfileContainer;
