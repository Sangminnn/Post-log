import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Home, Auth, Post } from 'pages';
import HeaderContainer from 'containers/Base/HeaderContainer';

import storage from 'lib/storage';

import * as UserActions from 'actions/user';

function App () {
  const dispatch = useDispatch();

  useEffect(() => {
    initializeUserInfo();
  }, []);

  const initializeUserInfo = async () => {
    const loggedInfo = storage.get('loggedInfo');
    if(!loggedInfo) return;

    await dispatch(UserActions.setLoggedInfo(loggedInfo));

    try {
      await UserActions.checkStatusRequest();
    } catch (e) {
      storage.remove('loggedInfo');
      window.location.href = '/auth/login?expired';
    }
  }

  return (
    <div>
      <HeaderContainer/>
      <Route exact path="/" component={Home}/>
      <Route path="/auth" component={Auth}/>
      <Route path="/post" component={Post}/>
    </div>
  )
};

export default App;