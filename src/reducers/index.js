import { combineReducers } from 'redux';
import auth from './auth';
import base from './base';
import post from './post';
import user from './user';

export default combineReducers({
  base,
  auth,
  user,
  post,
});