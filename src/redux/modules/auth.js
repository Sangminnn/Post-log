import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as AuthAPI from 'lib/api/auth';

import * as socialAuth from 'lib/socialAuth';

const CHANGE_INPUT = 'auth/CHANGE_INPUT'
const CHANGE_SOCIAL_INPUT = 'auth/CHANGE_SOCIAL_INPUT';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const CHECK_EMAIL_EXISTS = 'auth/CHECK_EMAIL_EXISTS';
const CHECK_USERNAME_EXISTS = 'auth/CHECK_USERNAME_EXISTS';

const LOCAL_REGISTER = 'auth/LOCAL_REGISTER';
const LOCAL_LOGIN = 'auth/LOCAL_LOGIN';

const LOGOUT = 'auth/LOGOUT';

const SET_ERROR = 'auth/SET_ERROR';

const GET_SOCIAL_TOKEN = 'auth/SOCIAL_LOGIN';
const SOCIAL_EXISTS = 'auth/SOCIAL_EXISTS';
const SOCIAL_REGISTER = 'auth/SOCIAL_REGISTER';

const SET_EMAIL = 'auth/SET_EMAIL';
// const GET_SOCIAL_PROFILE = 'auth/GET_SOCIAL_PROFILE';

export const changeInput = createAction(CHANGE_INPUT);
export const changeSocialInput = createAction(CHANGE_SOCIAL_INPUT);
export const initializeForm = createAction(INITIALIZE_FORM);

export const checkEmailExists = createAction(CHECK_EMAIL_EXISTS, AuthAPI.checkEmailExists);
export const checkUsernameExists = createAction(CHECK_USERNAME_EXISTS, AuthAPI.checkUsernameExists);

export const localRegister = createAction(LOCAL_REGISTER, AuthAPI.localRegister);
export const localLogin = createAction(LOCAL_LOGIN, AuthAPI.localLogin);

export const logout = createAction(LOGOUT, AuthAPI.logout);

// export const socialLogin = createAction(SOCIAL_LOGIN, AuthAPI.socialLogin);
export const getSocialToken = createAction(GET_SOCIAL_TOKEN, provider => socialAuth[provider](), provider => provider);
export const socialExists = createAction(SOCIAL_EXISTS, AuthAPI.socialExists);


export const setEmail = createAction(SET_EMAIL);

export const socialRegister = createAction(SOCIAL_REGISTER, AuthAPI.socialRegister);
// export const getSocialProfile = createAction(GET_SOCIAL_PROFILE, AuthAPI.getSocialProfile)

export const setError = createAction(SET_ERROR);

const initialState = Map({
  login: Map({
    form: Map({
      email: '',
      password: ''
    }),
    error: null
  }),
  register: Map({
    form: Map({
      name: '',
      email: '',
      username: '',
      password: '',
      passwordConfirm: ''
    }),
    exists: Map({
      email: false,
      password: false,
      username: false,
    }),
    error: null
  }),
  socialAuthResult: Map({
    accessToken: '',
    clientId: '',
    provider: '',
  }),
  socialRegister: Map({
    name: '',
    email: '',
    username: '',
  }),
  result: Map({})
});

export default handleActions({
  [CHANGE_INPUT]: (state, action) => {
    const { form, name, value } = action.payload;
    return state.setIn([form, 'form', name], value);
  },
  // immer version
  // [CHANGE_INPUT]: (state, action) => {
  //   produce(state, draft => {
  //     draft.socialRegister[name] = action.payload
  //   })
  // }
  [CHANGE_SOCIAL_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.setIn(['socialRegister', name], value);
  },
  [INITIALIZE_FORM]: (state, action) => {
    const initialForm = initialState.get(action.payload);
    return state.set(action.payload, initialForm);
  },
  [SET_EMAIL]: (state, action) => state.setIn(['socialRegister', 'email'], action.payload),
  ...pender({
    type: CHECK_EMAIL_EXISTS,
    onSuccess: (state, action) => state.setIn(['register', 'exists', 'email'], action.payload.data.exists)
  }),
  // function* checkEmailExists() {
  //   const { state, action } = yield take("CHECK_EMAIL_EXISTS"); // ?
  
  //   yield produce(state, draft => {
  //     draft.register[exists][email] = action.payload.data.exists;
  //   })
  // },
  ...pender({
    type: CHECK_USERNAME_EXISTS,
    onSuccess: (state, action) => state.setIn(['register', 'exists', 'username'], action.payload.data.exists)
  }),
  ...pender({
    type: LOCAL_LOGIN,
    onSuccess: (state, action) => state.set('result', Map(action.payload.data))
  }),
  ...pender({
    type: LOCAL_REGISTER,
    onSuccess: (state, action) => state.set('result', Map(action.payload.data))
  }),
  ...pender({
    type: GET_SOCIAL_TOKEN,
    onSuccess: (state, { payload: response, meta: provider }) => {
      console.log(response, provider);
      if (!response) return state;
      const { access_token: accessToken, client_id: clientId } = response.authResponse;
      return state.set('socialAuthResult', {
        accessToken,
        clientId,
        provider
      })
    }
  }),
  ...pender({
    type: SOCIAL_EXISTS,
    onSuccess: (state, action) => {
      console.log(action.payload.data);
      // email이 들어오면 key를 추가해서 객체로 result에 저장, 아니면 그냥 저장
      return typeof action.payload.data === 'string' ? state.set('result', Map({email: action.payload.data})) : state.set('result', Map(action.payload.data))
    }
  }),
  ...pender({
    type: SOCIAL_REGISTER,
    onSuccess: (state, action) => state.set('result', Map(action.payload.data))
  }),
  [SET_ERROR]: (state, action) => {
    const { form, message } = action.payload;
    return state.setIn([form, 'error'], message);
  }
}, initialState);