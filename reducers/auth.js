import { handleActions } from 'redux-actions';
import produce from 'immer';

import {
  CHANGE_INPUT,
  SET_ERROR,
  CHECK_EMAIL_EXISTS_REQUEST,
  CHECK_EMAIL_EXISTS_SUCCESS,
  CHECK_EMAIL_EXISTS_FAILURE,
  CHECK_USERNAME_EXISTS_REQUEST,
  CHECK_USERNAME_EXISTS_SUCCESS,
  CHECK_USERNAME_EXISTS_FAILURE,
  LOCAL_LOGIN_REQUEST,
  LOCAL_LOGIN_SUCCESS,
  LOCAL_LOGIN_FAILURE,
  LOCAL_REGISTER_REQUEST,
  LOCAL_REGISTER_SUCCESS,
  LOCAL_REGISTER_FAILURE,
  GET_SOCIAL_TOKEN_REQUEST,
  GET_SOCIAL_TOKEN_SUCCESS,
  GET_SOCIAL_TOKEN_FAILURE,
  GET_ACCESS_TOKEN,
  GET_PROVIDER_TOKEN,
} from 'actions/auth';

const initialState = {
  login: {
    form: {
      email: '',
      password: ''
    },
    pending: false,
    success: false,
    error: '',
    errorData: ''
  },
  register: {
    form: {
      name: '',
      email: '',
      username: '',
      password: '',
      passwordConfirm: ''
    },
    exists: {
      email: false,
      password: false,
      username: false,
    },
    pending: false,
    success: false,
    error: ''
  },
  socialAuthResult: {
    accessToken: '',
    clientId: '',
    provider: '',
  },
  socialRegister: {
    name: '',
    email: '',
    username: '',
  },
  result: {},
  emailChecked: false,
  usernameChecked: false,
  accessToken: ''
};


export default handleActions({
  [CHANGE_INPUT]: (state, action) => 
    produce(state, draft => {
      const { name, value, form } = action.payload;
      draft[form].form[name] = value;
    }),
  [SET_ERROR]: (state, action) => 
    produce(state, draft => {
      const { form, message } = action.payload;
      draft[form].error = message;
    }),
  [GET_ACCESS_TOKEN]: (state, action) => console.log('request token send'),
  // [INITIALIZE_FORM]: (state, action) => 
  //   produce(state, draft => {
  //     const initialForm = initialState[action.payload];
  //     draft[action.payload] = initialForm;
  //   }),
  [CHECK_EMAIL_EXISTS_REQUEST]: (state, action) => 
    produce(state, draft => {
      draft.emailChecked = false;
      draft.register.exists.email = '';
      draft.register.error = '';
    }),
  [CHECK_EMAIL_EXISTS_SUCCESS]: (state, action) => 
    produce(state, draft => {
      if(action.payload) {
        console.log('있음');
        draft.emailChecked = true;
        draft.register.error = '이미 존재하는 이메일입니다.';
      }
      console.log('없음');
      draft.emailChecked = true;
      draft.register.exists.email = ''
    }), 
  [CHECK_EMAIL_EXISTS_FAILURE]: (state, action) => 
    produce(state, draft => {
      console.log(action.payload);
    }),
  [CHECK_USERNAME_EXISTS_REQUEST]: (state, action) => 
    produce(state, draft => {
      draft.usernameChecked = false;
      draft.register.exists.username = '';
    }),
  [CHECK_USERNAME_EXISTS_SUCCESS]: (state, action) => 
    produce(state, draft => {
      console.log(action.payload);
      if(action.payload) {
        draft.usernameChecked = true;
        draft.register.error = '이미 존재하는 아이디입니다.'
      }
      
      draft.usernameChecked = true;
      draft.register.exists.username = '';
    }),
  [CHECK_USERNAME_EXISTS_FAILURE]: (state, action) => 
    produce(state, draft => {
      console.log(action.payload);
    }),
  [LOCAL_LOGIN_REQUEST]: (state, action) => 
    produce(state, draft => {
      draft.login.pending = true;
      draft.login.success = false;
      draft.login.error = '';
    }),
  [LOCAL_LOGIN_SUCCESS]: (state, action) => 
    produce(state, draft => {
      console.log('로컬로그인 성공');
      draft.login.pending = false;
      draft.login.success = true;
      draft.result = action.payload.data;
    }),
  [LOCAL_LOGIN_FAILURE]: (state, action) => 
    produce(state, draft => {
      console.log('로컬로그인 실패');
      draft.login.pending = false;
      draft.login.success = false;
      draft.login.error = true;
      draft.login.errorData = action.payload.data;
    }),
  [LOCAL_REGISTER_REQUEST]: (state, action) => 
    produce(state, draft => {
      draft.register.pending = true;
      draft.register.success = false;
      draft.register.error = false;
    }),
  [LOCAL_REGISTER_SUCCESS]: (state, action) => 
    produce(state, draft => {
      draft.register.pending = false;
      draft.register.success = true;
      draft.result = action.payload.data;
    }),
  [LOCAL_REGISTER_FAILURE]: (state, action) => 
    produce(state, draft => {
      console.log('로컬 아이디 등록 실패');
      draft.register.pending = true;
      draft.register.success = false;
      draft.register.error = false;
    }),
  [GET_SOCIAL_TOKEN_REQUEST]: (state, action) => console.log('get social token reqeust'),
  [GET_SOCIAL_TOKEN_SUCCESS]: (state, action) => 
    produce(state, draft => {
      console.log(action.payload);
    }),
  [GET_SOCIAL_TOKEN_FAILURE]: (state, action) => console.log('get token failure'),
  [GET_PROVIDER_TOKEN]: (state, action) => 
    produce(state, draft => {
      
    })
}, initialState);