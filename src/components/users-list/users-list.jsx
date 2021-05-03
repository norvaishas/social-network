import React from 'react';

const User = ({props}) => {
  const {followUser, unFollowUser, users} = props;
  return (
    users.map(user => {
      return (
        <div className={'userWrapper'} key={user.id}>
          <div className="photo">
            <img src="" alt=""/>
          </div>
          <div className="info">
            <h3 className="login">{user.login}</h3>
            <span className="name">{user.name}</span>
          </div>
          <div className="buttons">
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

const UsersList = props => <User props={props}/>

export default UsersList;
