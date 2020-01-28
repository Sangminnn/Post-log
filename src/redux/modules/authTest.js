import { createAction, handleActions } from 'redux-actions';
import { call, put } from 'redux-saga';
import * as PostsAPI from '';
import * as AuthAPI from '';

const CHECK_EMAIL_EXISTS = 'auth/CHECK_EMAIL_EXISTS';
const CHECK_EMAIL_EXISTS_SUCCESS = 'auth/CHECK_EMAIL_EXISTS_SUCCESS';
const CHECK_EMAIL_EXISTS_ERROR = 'auth/CHECK_EMAIL_EXISTS_ERROR';
// const CHECK_EMAIL_EXISTS_ASYNC = 'auth/CHECK_EMAIL_EXISTS_ASYNC';

// export const getPosts = createAction(GET_POSTS);

// 이후 setEmail액션을 호출시에 

export const checkEmailExists = createAction(CHECK_EMAIL_EXISTS, authAPI.checkEmailExists);
// 추가적 인자는 리듀서용
// export const checkEmailExists = createAction(CHECK_EMAIL_EXISTS, )
// 2번째 인자는 들어오는 값을 payload에 넣어줌. 3번째는 meta에
// export const checkEmailExistsAsync = createAction(CHECK_EMAIL_EXISTS_ASYNC);

function* emailCheck() {
  try {
    const existsCheck = yield call(AuthAPI.checkEmailExists);
    yield put({
      type: CHECK_EMAIL_EXISTS_SUCCESS,
      payload: existsCheck
    })
  } catch (e) {
    yield put({
      type: CHECK_EMAIL_EXISTS_ERROR,
      error: true,
      payload: e
    })
  }
};

function* authSaga() {
  yield takeEvery('CHECK_EMAIL_EXISTS', emailCheck);
}

// export const getPosts = () => async dispatch => {
//   dispatch({ type: GET_POSTS }); // 요청이 시작됨
//   try {
//     const posts = postsAPI.getPosts(); // API 호출
//     dispatch({ type: GET_POSTS_SUCCESS, posts }); // 성공
//   } catch (e) {
//     dispatch({ type: GET_POSTS_ERROR, error: e }); // 실패
//   }
// };