import qs from 'qs';
import React, { useState, useEffect, useCallback } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import { AuthContent, InputWithLabel, AuthButton, SocialLoginButton, RightAlignedLink, AuthError } from 'components/Auth';
import { useSelector, useDispatch } from 'react-redux';

import * as AuthActions from 'actions/auth';
import * as UserActions from 'actions/user';

function Login () {
  let history = useHistory();
  let location = useLocation();

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  
  const { success, error } = useSelector(state => state.auth.login);
  const result = useSelector(state => state.auth.result);
  const loggedInfo = useSelector(state => state.user.loggedInfo);

  // const socialAuthResult = useSelector(state => state.auth.socialAuthResult);

  // 내가 생각하는 componentWillUnmount
  // useEffect(() => {
  //   return () => dispatch(AuthActions.initializeForm('login'));
  // })

  useEffect(() => {
    if(error) {
      console.log(error);
      setError('잘못된 정보입니다.');
      console.log('여기 나왔어요');
    }
  }, [error])

  useEffect(() => {
    if(success) {
      history.push('/');
    }
  })

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      
      (name === 'email') ? setEmail(value) : setPassword(value)
    }, []);

  const setError = useCallback(
    (message) => {
      dispatch(
        AuthActions.setError({
          form: 'login',
          message
        })
      )
      return false;
    }, []);

  const handleLocalLogin = async () => {
      await dispatch(AuthActions.localLoginRequest({ email, password }));
      await dispatch(UserActions.setLoggedInfo(loggedInfo));
      // storage.set('loggedInfo', result.loggedInfo);
    };
  

  const onSocialLogin = async (provider) => {
    console.log('social login');
    
    const nextUrl = '/';

    if (provider === 'google') {
      console.log('google');
      const AUTHORIZE_URI = "https://accounts.google.com/o/oauth2/v2/auth";
      const CLIENT_ID = "646814998521-mpbmbvtmkd4oo2ipmqqsf8mt9lmi28oh.apps.googleusercontent.com";

      const queryStr = qs.stringify({
        client_id: CLIENT_ID,
        redirect_uri: 'http://localhost:4000/api/auth/callback/google',
        response_type: "code",
        scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile" 
      })

      // const googleLoginUrl = `/auth/callback/google/login?next=${nextUrl}`;
      const googleLoginUrl = AUTHORIZE_URI + "?" + queryStr;
      window.location.replace(googleLoginUrl);
      return;
    }
    // if (provider === 'facebook') {
    //   const facebookLogin = `${process.env.API_HOST ||
    //     ''}/auth/callback/facebook/login?next=${nextUrl}`;
    //   window.location.replace(facebookLogin);
    // }
    
    // try {
      // await dispatch(AuthActions.getSocialTokenRequest(provider));
    //   // accessToken은 socialAuthResult꺼
    
    // 이 부분도 getSocialToken에서 받아온 값으로 바로 dispatch해주어야하기때문에
    // getSocialToken의 success saga로 동작을 옮기는게 좋아보임.
    //   await dispatch(AuthActions.socialExists({provider, accessToken}));

    //   console.log(result.email);
    //   if(!result.email) {
    //     console.log('유저정보 있음');
        
    //     dispatch(UserActions.setLoggedInfo(result.loggedInfo));
    //     history.push('/post/postList');
    //     storage.set('loggedInfo', result.loggedInfo);
    //   } else {
    //     console.log('유저정보 없음');
    //     await dispatch(AuthActions.setEmail(result.email));
    //     history.push('/auth/register/social');
    //   }
    // } catch (e) {
    //   console.log(e);
    //   setError('잘못된 계정정보입니다.');
    // }
  }

  return (
    <div>
      <AuthContent title="로그인">
        <InputWithLabel
          label="이메일"
          name="email"
          placeholder="이메일"
          value={email}
          onChange={handleChange}
        />
        <InputWithLabel
          label="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={handleChange}
        />
      </AuthContent>
      {
        error && <AuthError>{error}</AuthError>
      }
      <AuthButton onClick={handleLocalLogin}>제출</AuthButton>
      <SocialLoginButton type='google' onSocialLogin={onSocialLogin} />
      <SocialLoginButton type='facebook' onSocialLogin={onSocialLogin} />
      <RightAlignedLink to="/auth/register">회원가입</RightAlignedLink>
    </div> 
  )
};

export default Login;