import { handleActions } from 'redux-actions';
import produce from 'immer';
import {
  CHANGE_INPUT,
  SET_TARGET,
  POST_REGISTER_REQUEST,
  POST_REGISTER_SUCCESS,
  POST_REGISTER_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE
} from 'actions/post';

const initialState = {
  post: {
    title: '',
    content: '',
    author: ''
  },
  result: '',
  targetId: {
    key: ''
  },
  loadPost: '',
  error: false,
  requestRegister: false,
  postLoaded: false
};

export default handleActions({
  [CHANGE_INPUT]: (state, action) => 
    produce(state, draft => {
      const { name, value } = action.payload;
      draft.post[name] = value;
    }),
  [SET_TARGET]: (state, action) => 
    produce(state, draft => {
      draft.targetId.key = action.payload;
    }),
  [POST_REGISTER_REQUEST]: (state, action) => 
    produce(state, draft => {
      draft.requestRegister = action.payload;
    }),
  [POST_REGISTER_SUCCESS]: (state, action) => 
    produce(state, draft => {
      draft.requestRegister = true;
      draft.result = action.payload.data;
    }),
  [POST_REGISTER_FAILURE]: (state, action) => 
    produce(state, draft => {
      draft.error = action.payload;
    }),
  [LOAD_POST_REQUEST]: (state, action) => 
    produce(state, draft => {
      draft.postLoaded = false;
    }),
  [LOAD_POST_SUCCESS]: (state, action) => 
    produce(state, draft => {
      draft.postLoaded = true;
      draft.loadPost = action.payload.data;
    }),
  [LOAD_POST_FAILURE]: (state, action) => 
    produce(state, draft => {
      draft.error = true;
      console.log(action.payload);
    })
}, initialState);