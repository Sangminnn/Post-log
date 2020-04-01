import { call, put, takeLatest } from 'redux-saga/effects';
import {
  CHECK_STATUS_REQUEST,
  checkStatusSuccess,
  checkStatusFailure,
  LOGOUT_REQUEST,
  logoutSuccess,
  logoutFailure
} from 'actions/user';

import * as AuthAPI from 'lib/api/auth';

function* watchCheckStatus(action) {
  try {
    const result = yield call(AuthAPI.checkStatus, action.data);
    yield put(checkStatusSuccess(result))
  } catch (e) {
    yield put(checkStatusFailure(e));   
  }
}


function* watchLogout() {
  try {
    console.log('logout start');
    const result = yield call(AuthAPI.logout)
    yield put(logoutSuccess(result));
  } catch (e) {
    yield put(logoutFailure(e));
  }
}


export default function* userSaga() {
  yield takeLatest(CHECK_STATUS_REQUEST, watchCheckStatus);
  yield takeLatest(LOGOUT_REQUEST, watchLogout);
}