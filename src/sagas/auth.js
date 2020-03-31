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
  VERIFY_SOCIAL_REQUEST,
  verifySocialSuccess,
  verifySocialFailure,
  autocompleteRegisterForm,
  SOCIAL_REGISTER_REQUEST,
  socialRegisterSuccess,
  socialRegisterFailure
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

function* watchVerifySocial(action) {
  
  try {
    const { accessToken, provider, history } = action.payload;

    const result = yield call(AuthAPI.verifySocial, { accessToken, provider });
    yield put(verifySocialSuccess({ ...result.data, accessToken, provider}));

    if(!result.data.exists) {
      yield put(autocompleteRegisterForm({
        username: result.data.profile.name,
        email: result.data.profile.email
      }))
      history.push('/auth/socialRegister');
    }
    // exists가 있을 경우
    console.log(result.data);

    if(result.data[0] === 'user') {
      storage.set('loggedInfo', result.data.user.profile);
      yield put(UserActions.setLoggedInfo(result.data.user.profile));
      yield put(UserActions.setValidated(true));
    } else {
      storage.set('loggedInfo', result.data.socialAccount.profile);
      yield put(UserActions.setLoggedInfo(result.data.socialAccount.profile));
      yield put(UserActions.setValidated(true));
    }

    history.push('/');
  } catch (e) {
    yield put(verifySocialFailure(e));
  }
}

function* watchSocialRegister(action) {
  try {
    const result = yield call(AuthAPI.socialRegister, action.payload);
    
    yield put(socialRegisterSuccess(result));
    storage.set('loggedInfo', result.data);
    yield put(UserActions.setLoggedInfo(result.data));
    yield put(UserActions.setValidated(true));
  } catch (e) {
    console.log(e.response);
    yield put(socialRegisterFailure(e.response));
  }
}

export default function* authSaga() {
  yield takeLatest(CHECK_EMAIL_EXISTS_REQUEST, watchCheckEmail);
  yield takeLatest(CHECK_USERNAME_EXISTS_REQUEST, watchCheckUsername);
  yield takeLatest(LOCAL_LOGIN_REQUEST, watchLocalLogin);
  yield takeLatest(LOCAL_REGISTER_REQUEST, watchLocalRegister);
  // getAccessToken 이거도 3단계가 필요한가 ..? 어차피 보내주기만하고 server에서 redirect해서 돌아올텐데..?
  yield takeLatest(GET_ACCESS_TOKEN, watchGetAccessToken);
  yield takeLatest(VERIFY_SOCIAL_REQUEST, watchVerifySocial);
  yield takeLatest(SOCIAL_REGISTER_REQUEST, watchSocialRegister);
}