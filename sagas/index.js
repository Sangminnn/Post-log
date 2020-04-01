import { all, call } from 'redux-saga/effects';
import authSaga from './auth';
import baseSaga from './base';
import userSaga from './user';
import postSaga from './post';

export default function* rootSaga() {
  yield all([
    call(baseSaga), 
    call(authSaga),
    call(userSaga),
    call(postSaga)
  ])
};