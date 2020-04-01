import { createAction } from 'redux-actions';

export const SET_LOGGED_INFO = 'user/SET_LOGGED_INFO';
export const SET_VALIDATED = 'user/SET_VALIDATED';

export const LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE';

export const CHECK_STATUS_REQUEST = 'user/CHECK_STATUS_REQUEST';
export const CHECK_STATUS_SUCCESS = 'user/CHECK_STATUS_SUCCESS';
export const CHECK_STATUS_FAILURE = 'user/CHECK_STATUS_FAILURE';

export const setLoggedInfo = createAction(SET_LOGGED_INFO);
export const setValidated = createAction(SET_VALIDATED);
// export const logout = createAction(LOGOUT);

export const checkStatusRequest = createAction(CHECK_STATUS_REQUEST);
export const checkStatusSuccess = createAction(CHECK_STATUS_SUCCESS);
export const checkStatusFailure = createAction(CHECK_STATUS_FAILURE);

export const logoutRequest = createAction(LOGOUT_REQUEST);
export const logoutSuccess = createAction(LOGOUT_SUCCESS);
export const logoutFailure = createAction(LOGOUT_FAILURE);
