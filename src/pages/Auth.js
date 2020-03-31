import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { AuthWrapper } from 'components/Auth';
import { Login, Register, SocialRegister, Callback } from 'containers/Auth';

import * as BaseActions from 'actions/base';

function Auth() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(BaseActions.setVisibility(false));

    return () => dispatch(BaseActions.setVisibility(true));
  }, []);

  return (
    <AuthWrapper>
      <Route path="/auth/login" component={Login}/>
      <Route path="/auth/register" component={Register}/>
      <Route path="/auth/socialRegister" component={SocialRegister}/>
      <Route path="/auth/login/social/callback" component={Callback}/>
    </AuthWrapper>
  )
};

export default Auth;