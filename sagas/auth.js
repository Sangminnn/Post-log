import { call, put, takeLatest } from 'redux-saga/effects';
import {
  CHECK_EMAIL_EXISTS_REQUEST,
  checkEmailExistsSuccess,
  checkEmailExistsFailure,
  CHECK_USERNAME_EXISTS_REQUEST,
  checkUsernameExistsSuccess,
  checkUsernameExistsFailure,
  LOCAL_LOGIN_REQUEST,
  localLoginSuccess,
  localLoginFailure,
  LOCAL_REGISTER_REQUEST,
  localRegisterSuccess,
  localRegisterFailure,
  GET_ACCESS_TOKEN,
  sendAccessToken
} from 'actions/auth';

import * as UserActions from 'actions/user';

import * as AuthAPI from 'lib/api/auth';

import storage from 'lib/storage';

function* watchCheckEmail(action) {
  try {
    const result = yield call(AuthAPI.checkEmailExists, action.payload);
    console.log(result);
    yield put(checkEmailExistsSuccess(result.data.exists));
  } catch (e) {
    yield put(checkEmailExistsFailure(e));
  }
}

function* watchCheckUsername(action) {
  try {
    const result = yield call(AuthAPI.checkUsernameExists, action.payload)
    console.log(result);
    yield put(checkUsernameExistsSuccess(result.data.exists));
  } catch (e) {
    yield put(checkUsernameExistsFailure(e));
  }
}


function* watchLocalLogin(action) {
  try {
    console.log('watch login!', action.payload);
    const login = yield call(AuthAPI.localLogin, action.payload);
    yield put(localLoginSuccess(login));
  } catch (e) {
    yield put(localLoginFailure(e));
  }
}

function* watchLocalRegister(action) {
  try {
    const register = yield call(AuthAPI.localRegister, action.payload);
    yield put(localRegisterSuccess(register));
    storage.set('loggedInfo', register.data);
    yield put(UserActions.setLoggedInfo(register.data));
    yield put(UserActions.setValidated(true));
  } catch (e) {
    yield put(localRegisterFailure(e));
  }
}
// 기존에 hellojs 를 사용하던 방식이기때문에 일단 주석처리
// function* watchGetSocialToken(action) {
//   try {
//     const provider = action.payload;
//     const result = yield call(socialAuth[provider]);
//     const { access_token: accessToken, client_id: clientId } = result.authResponse;
//     yield put(getSocialTokenSuccess({ accessToken, clientId, provider }));
//   } catch (e) {
//     console.log(e);
//   }
// }

function* watchGetAccessToken(action) {
  try {
    console.log('gogo');
    yield call(AuthAPI.sendAccessToken, action.payload);
    console.log('send accesstoken complete');
  } catch (e) {
    console.log(e);
  }
}

export default function* authSaga() {
  yield takeLatest(CHECK_EMAIL_EXISTS_REQUEST, watchCheckEmail);
  yield takeLatest(CHECK_USERNAME_EXISTS_REQUEST, watchCheckUsername);
  yield takeLatest(LOCAL_LOGIN_REQUEST, watchLocalLogin);
  yield takeLatest(LOCAL_REGISTER_REQUEST, watchLocalRegister);
  // yield takeLatest(GET_SOCIAL_TOKEN_REQUEST, watchGetSocialToken);
  yield takeLatest(GET_ACCESS_TOKEN, watchGetAccessToken);
}