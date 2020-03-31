import { createAction } from 'redux-actions';

export const CHANGE_INPUT = 'auth/CHANGE_INPUT'
export const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const CHECK_EMAIL_EXISTS_REQUEST = 'auth/CHECK_EMAIL_EXISTS_REQUEST';
export const CHECK_EMAIL_EXISTS_SUCCESS = 'auth/CHECK_EMAIL_EXISTS_SUCCESS';
export const CHECK_EMAIL_EXISTS_FAILURE = 'auth/CHECK_EMAIL_EXISTS_FAILURE';

export const CHECK_USERNAME_EXISTS_REQUEST = 'auth/CHECK_USERNAME_EXISTS_REQUEST';
export const CHECK_USERNAME_EXISTS_SUCCESS = 'auth/CHECK_USERNAME_EXISTS_SUCCESS';
export const CHECK_USERNAME_EXISTS_FAILURE = 'auth/CHECK_USERNAME_EXISTS_FAILURE';

export const LOCAL_REGISTER_REQUEST = 'auth/LOCAL_REGISTER_REQUEST';
export const LOCAL_REGISTER_SUCCESS = 'auth/LOCAL_REGISTER_SUCCESS';
export const LOCAL_REGISTER_FAILURE = 'auth/LOCAL_REGISTER_FAILURE';

export const LOCAL_LOGIN_REQUEST = 'auth/LOCAL_LOGIN_REQUEST';
export const LOCAL_LOGIN_SUCCESS = 'auth/LOCAL_LOGIN_SUCCESS';
export const LOCAL_LOGIN_FAILURE = 'auth/LOCAL_LOGIN_FAILURE';

export const LOGOUT = 'auth/LOGOUT';

export const SET_ERROR = 'auth/SET_ERROR';

export const GET_PROVIDER_TOKEN = 'auth/GET_PROVIDER_TOKEN';

export const GET_ACCESS_TOKEN = 'auth/GET_ACCESS_TOKEN';

export const GET_SOCIAL_TOKEN_REQUEST = 'auth/GET_SOCIAL_TOKEN_REQUEST';
export const GET_SOCIAL_TOKEN_SUCCESS = 'auth/GET_SOCIAL_TOKEN_SUCCESS';
export const GET_SOCIAL_TOKEN_FAILURE = 'auth/GET_SOCIAL_TOKEN_FAILURE';

export const VERIFY_SOCIAL_REQUEST = 'auth/VERIFY_SOCIAL_REQUEST';
export const VERIFY_SOCIAL_SUCCESS = 'auth/VERIFY_SOCIAL_SUCCESS';
export const VERIFY_SOCIAL_FAILURE = 'auth/VERIFY_SOCIAL_FAILURE';

export const AUTOCOMPLETE_REGISTER_FORM = 'auth/AUTOCOMPLETE_REGISTER_FORM'

export const SOCIAL_REGISTER_REQUEST = 'auth/SOCIAL_REGISTER_REQUEST';
export const SOCIAL_REGISTER_SUCCESS = 'auth/SOCIAL_REGISTER_SUCCESS';
export const SOCIAL_REGISTER_FAILURE = 'auth/SOCIAL_REGISTER_FAILURE';

export const changeInput = createAction(CHANGE_INPUT);
export const initializeForm = createAction(INITIALIZE_FORM);

export const logout = createAction(LOGOUT);
export const setError = createAction(SET_ERROR);

export const getAccessToken = createAction(GET_ACCESS_TOKEN);

export const checkEmailExistsRequest = createAction(CHECK_EMAIL_EXISTS_REQUEST);
export const checkEmailExistsSuccess = createAction(CHECK_EMAIL_EXISTS_SUCCESS);
export const checkEmailExistsFailure = createAction(CHECK_EMAIL_EXISTS_FAILURE);

export const checkUsernameExistsRequest = createAction(CHECK_USERNAME_EXISTS_REQUEST);
export const checkUsernameExistsSuccess = createAction(CHECK_USERNAME_EXISTS_SUCCESS);
export const checkUsernameExistsFailure = createAction(CHECK_USERNAME_EXISTS_FAILURE);

export const localLoginRequest = createAction(LOCAL_LOGIN_REQUEST);
export const localLoginSuccess = createAction(LOCAL_LOGIN_SUCCESS);
export const localLoginFailure = createAction(LOCAL_LOGIN_FAILURE);

export const localRegisterRequest = createAction(LOCAL_REGISTER_REQUEST);
export const localRegisterSuccess = createAction(LOCAL_REGISTER_SUCCESS);
export const localRegisterFailure = createAction(LOCAL_REGISTER_FAILURE);

export const getSocialTokenRequest = createAction(GET_SOCIAL_TOKEN_REQUEST);
export const getSocialTokenSuccess = createAction(GET_SOCIAL_TOKEN_SUCCESS);
export const getSocialTokenFailure = createAction(GET_SOCIAL_TOKEN_FAILURE);

export const verifySocialRequest = createAction(VERIFY_SOCIAL_REQUEST);
export const verifySocialSuccess = createAction(VERIFY_SOCIAL_SUCCESS);
export const verifySocialFailure = createAction(VERIFY_SOCIAL_FAILURE);

export const autocompleteRegisterForm = createAction(AUTOCOMPLETE_REGISTER_FORM);

export const socialRegisterRequest = createAction(SOCIAL_REGISTER_REQUEST);
export const socialRegisterSuccess = createAction(SOCIAL_REGISTER_SUCCESS);
export const socialRegisterFailure = createAction(SOCIAL_REGISTER_FAILURE);