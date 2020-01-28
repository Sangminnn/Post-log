import { handleActions, createAction } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as BaseAPI from 'lib/api/base';

const SET_VISIBILITY = 'base/SET_VISIBILITY';
const TOGGLE_MENU = 'base/TOGGLE_MENU';
const LOAD_POSTS = 'base/LOAD_POSTS'

export const setVisibility = createAction(SET_VISIBILITY);
export const toggleMenu = createAction(TOGGLE_MENU);
export const loadPosts = createAction(LOAD_POSTS, BaseAPI.loadPosts);

const initialState = Map({
  header: Map({
    visible: true,
    menuToggle: false,
  }),
  posts: Map({})
})

export default handleActions({
  [SET_VISIBILITY]: (state, action) => state.setIn(['header','visible'], action.payload),
  [TOGGLE_MENU]: (state, action) => state.setIn(['header', 'menuToggle'], action.payload),
  ...pender({
    type: LOAD_POSTS,
    onSuccess: (state, action) => {
      console.log(action.payload);
      return state.set('posts', action.payload.data)
    }
  })
}, initialState);