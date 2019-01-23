import { combineReducers } from 'redux';

import auth from './auth';
import loader from './loader';
import questions from './questions';
import users from './users';

export default combineReducers({
  auth,
  loader,
  questions,
  users
});
