import { call, put, takeLatest } from 'redux-saga/effects';
import {
  LOAD_POSTS_REQUEST,
  loadPostsSuccess,
  loadPostsFailure
} from 'actions/base';

import * as BaseAPI from 'lib/api/base';

function* watchLoadPosts() {
  try {
    const results = yield call(BaseAPI.loadPosts);
    console.log(results);
    yield put(loadPostsSuccess(results));
  } catch (e) {
    yield put(loadPostsFailure(e));
  }
}

export default function* baseSaga() {
  yield takeLatest(LOAD_POSTS_REQUEST, watchLoadPosts)
};