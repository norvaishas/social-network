import wallReducer from './wall-reducer';
import messengerReducer from './messenger-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers(
  {
    wall: wallReducer,
    messenger: messengerReducer
  });

export default rootReducer;
