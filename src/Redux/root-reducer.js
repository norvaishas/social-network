import wallReducer from './wall-reducer';
import messengerReducer from './messenger-reducer';
import {combineReducers} from 'redux';
import usersReducer from './users-reducer';
import profileReducer from './profile-reducer';

const rootReducer = combineReducers(
  {
    wall: wallReducer,
    messenger: messengerReducer,
    usersPage: usersReducer,
    profile: profileReducer,
  });

export default rootReducer;
