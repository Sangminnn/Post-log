import { createAction } from 'redux-actions';

export const CHANGE_INPUT = 'post/CHANGE_INPUT';

export const SET_TARGET = 'post/SET_TARGET'

export const LOAD_POST_REQUEST = 'post/LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'post/LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'post/LOAD_POST_FAILURE';

export const POST_REGISTER_REQUEST = 'post/POST_REGISTER_REQUEST';
export const POST_REGISTER_SUCCESS = 'post/POST_REGISTER_SUCCESS';
export const POST_REGISTER_FAILURE = 'post/POST_REGISTER_FAILURE';

// 먼저 액션 생성함수 만들기

// sync
export const changeInput = createAction(CHANGE_INPUT);
export const setTarget = createAction(SET_TARGET);

// 따로 인자설정 안해도 들어오면 알아서 payload로 들어감??
// async
export const postRegisterRequest = createAction(POST_REGISTER_REQUEST);
export const postRegisterSuccess = createAction(POST_REGISTER_SUCCESS);
export const postRegisterFailure = createAction(POST_REGISTER_FAILURE);

export const loadPostRequest = createAction(LOAD_POST_REQUEST);
export const loadPostSuccess = createAction(LOAD_POST_SUCCESS);
export const loadPostFailure = createAction(LOAD_POST_FAILURE);
