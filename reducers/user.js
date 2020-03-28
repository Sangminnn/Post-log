import { handleActions } from 'redux-actions';
import produce from 'immer';
import {
  SET_LOGGED_INFO,
  SET_VALIDATED,
  CHECK_STATUS_REQUEST,
  CHECK_STATUS_SUCCESS,
  CHECK_STATUS_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from 'actions/user';


const initialState = {
  loggedInfo: {
    thumbnail: null,
    username: null
  },
  logged: false,
  validated: false,
  statusChecked: false
};

export default handleActions({
  [SET_LOGGED_INFO]: (state, action) => 
    produce(state, draft => {
      const { thumbnail, username } = action.payload;
      draft.loggedInfo.thumbnail = thumbnail;
      draft.loggedInfo.username = username;
      draft.logged = true;
    }),
  [SET_VALIDATED]: (state, action) => 
    produce(state, draft => {
      draft.validated = action.payload;
    }),
  [CHECK_STATUS_REQUEST]: (state, action) => 
    produce(state, draft => {
      draft.statusChecked = false;
    }),
  [CHECK_STATUS_SUCCESS]: (state, action) => 
    produce(state, draft => {
      draft.loggedInfo = action.payload.data;
      draft.validated = true;
    }),
  [CHECK_STATUS_FAILURE]: (state, action) => 
    produce(state, draft => {
      console.log(action.payload);
    }),
  [LOGOUT_REQUEST]: (state, action) => console.log('logout request'),
  [LOGOUT_SUCCESS]: (state, action) => 
    produce(state, draft => {
      draft.logged = false;
    }),
  [LOGOUT_FAILURE]: (state, action) => console.log('logout error')
}, initialState);
