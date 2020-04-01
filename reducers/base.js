import { handleActions } from 'redux-actions';
import produce from 'immer';
import {
  SET_VISIBILITY,
  TOGGLE_MENU,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE
} from 'actions/base';

const initialState = {
  header: {
    visible: true,
    menuToggle: false
  },
  posts: {},
  loadPosts: {}
}

export default handleActions({
  [SET_VISIBILITY]: (state, action) => 
    produce(state, draft => {
      draft.header.visible = action.payload
    }),
  [TOGGLE_MENU]: (state, action) => 
    produce(state, draft => {
      draft.header.menuToggle = action.payload
    }),
  [LOAD_POSTS_REQUEST]: (state, action) => 
    console.log('post load request'),
  [LOAD_POSTS_SUCCESS]: (state, action) =>
    produce(state, draft => {
      const result = action.payload.data;
      draft.posts = result;
    }),
  [LOAD_POSTS_FAILURE]: (state, action) =>
    produce(state, draft => {
      console.log(action.payload.response.data);
    })
}, initialState)
