import { call, put, takeLatest } from 'redux-saga/effects';
import {
  LOAD_POST_REQUEST,
  loadPostSuccess,
  loadPostFailure,
  POST_REGISTER_REQUEST,
  postRegisterSuccess,
  postRegisterFailure
} from 'actions/post';

import * as PostAPI from 'lib/api/post';

function* watchLoadPost(action) {
  try {
    const result = yield call(PostAPI.loadPost, action.payload);
    console.log(result);
    yield put(loadPostSuccess(result));
  } catch (e) {
    console.log(e);
    yield put(loadPostFailure(e));
  }
}

function* watchPostRegister(action) {
  try {
    const post = yield call(PostAPI.postRegister, action.payload);
    yield put(postRegisterSuccess(post));
  } catch (e) {
    console.log(e);
    yield put(postRegisterFailure(e));
  }
}

export default function* postSaga() {
  yield takeLatest(LOAD_POST_REQUEST, watchLoadPost);
  yield takeLatest(POST_REGISTER_REQUEST, watchPostRegister);
}