import { createAction } from 'redux-actions';

export const SET_VISIBILITY = 'base/SET_VISIBILITY';
export const TOGGLE_MENU = 'base/TOGGLE_MENU';

export const LOAD_POSTS_REQUEST = 'base/LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'base/LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'base/LOAD_POSTS_FAILURE';

export const setVisibility = createAction(SET_VISIBILITY);
export const toggleMenu = createAction(TOGGLE_MENU);

export const loadPostsRequest = createAction(LOAD_POSTS_REQUEST);
export const loadPostsSuccess = createAction(LOAD_POSTS_SUCCESS);
export const loadPostsFailure = createAction(LOAD_POSTS_FAILURE);