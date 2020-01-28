import { handleActions, createAction } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as PostAPI from 'lib/api/post';

const CHANGE_INPUT = 'post/CHANGE_INPUT';
const POST_REGISTER = 'post/POST_REGISTER';
const LOAD_POST = 'post/LOAD_POST';
const SET_TARGET = 'post/SET_TARGET'

export const changeInput = createAction(CHANGE_INPUT);
export const postRegister = createAction(POST_REGISTER, PostAPI.postRegister);
export const loadPost = createAction(LOAD_POST, PostAPI.loadPost);
export const setTarget = createAction(SET_TARGET);

const initialState = Map({
  post: Map({
    title: '', 
    content: '',
    author: ''
  }),
  result: Map({}),
  targetId: Map({
    key: ''
  }),
  loadPost: Map({})
});

export default handleActions({
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.setIn(['post', name], value);
  },
  [SET_TARGET]: (state, action) => {
    console.log(action.payload);
    return state.setIn(['targetId', 'key'], action.payload);
  },
  ...pender({
    type: POST_REGISTER,
    onSuccess: (state, action) => {
      console.log(action.payload);
      console.log("성공");
      return state.set('result', Map(action.payload.data));
    }
  }),
  ...pender({
    type: LOAD_POST,
    onSuccess: (state, action) => {
      console.log(action.payload);
      console.log("포스트 불러오기 성공");
      return state.set('loadPost', Map(action.payload.data));
    }
  })
}, initialState);