import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { ForbiddenInput, AuthContent, InputWithLabel, AuthButton, RightAlignedLink, AuthError } from 'components/Auth';
import { useSelector, useDispatch } from 'react-redux';
import { isLength, isAlphanumeric } from 'validator';

import * as AuthActions from 'actions/auth';

function SocialRegister() {
  let history = useHistory();
  const dispatch = useDispatch();

  const [socialName, setSocialName] = useState('');
  const [socialId, setSocialId] = useState('');

  const { email, username } = useSelector(state => state.auth.register.form);

  const error = useSelector(state => state.auth.socialRegister.error);
  const { id } = useSelector(state => state.auth.result);
  const { accessToken, provider } = useSelector(state => state.auth.socialAuthResult);

  useEffect(() => {
    dispatch(AuthActions.initializeForm('socialRegister'));
    setSocialId(username);
  }, []);

  useEffect(() => {
    if(error) {
      console.log(error);
      setError('잘못된 정보입니다.')
    }
  }, [error]);

  const setError = (message) => {
    dispatch(AuthActions.setError({
      form: 'socialRegister',
      message
    }));
  };

  const validate = 
    {
      socialName: (value) => {
        const regex = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
  
        if(value.match(regex)) {
          setError('이름은 한글로만 이루어져야 합니다.');
          return false;
        };
        setError(null);
        return true;
      },
      socialId: (value) => {
        if(!isAlphanumeric(value) || !isLength(value, { min:4, max: 15 })) {
          setError('아이디는 4~15 글자의 알파벳 혹은 숫자로 이뤄져야 합니다.');
          return false;
        }
        setError(null);
        return true;
      }
    };

  const checkUsernameExists = async (socialId) => {
    await dispatch(AuthActions.checkUsernameExistsRequest(socialId));
  };

  const handleSocialRegister = useCallback(
    async () => {
  
      if(error) return;
      if(!validate['socialName'](socialName) || !validate['socialId'](socialId)) {
          return;
      }
      try {
        await dispatch(AuthActions.socialRegisterRequest({
          socialName, email, socialId, accessToken, provider, id
        }));
        history.push('/'); // 
      } catch (e) {
        console.log(e);
      }
    }, [socialName, socialId])
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    (name === 'socialName') ? setSocialName(value) : setSocialId(value);

    if(name === 'socialId') checkUsernameExists(value);
  };

  return (
    <div>
        <AuthContent title="회원가입">
          <InputWithLabel
            label="이름"
            name="socialName"
            placeholder="이름"
            value={socialName}
            onChange={handleChange}
            autocomplete="off"
          />
          <ForbiddenInput
            label="이메일"
            name="email"
            placeholder="이메일"
            value={email}
            onChange={handleChange}
            disabled
          />
          <InputWithLabel
            label="아이디"
            name="socialId"
            placeholder="아이디"
            value={socialId}
            onChange={handleChange}
            autocomplete="off"
          />
        </AuthContent>
        {
          error && <AuthError>{error}</AuthError>
        }
        <AuthButton onClick={handleSocialRegister}>회원가입</AuthButton>
        <RightAlignedLink to="/auth/login">로그인</RightAlignedLink>
      </div>
  )
}

export default SocialRegister;