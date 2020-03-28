import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink, AuthError } from 'components/Auth';
import { useSelector, useDispatch } from 'react-redux';
import { isEmail, isLength, isAlphanumeric } from 'validator';

import * as AuthActions from 'actions/auth';


function Register() {
  let history = useHistory();

  const dispatch = useDispatch();

  const { name, email, username, password, passwordConfirm } = useSelector(state => state.auth.register.form);
  
  const error = useSelector(state => state.auth.register.error);
  const result = useSelector(state => state.auth.result);

  useEffect(() => {
    return () => dispatch(AuthActions.initializeForm('register'));
  });

  const setError = (message) => {
    dispatch(AuthActions.setError({
      form: 'register',
      message
    }));
  };

  const validate = 
    {
      name: (value) => {
        const regex = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
  
        if(value.match(regex)) {
          setError('이름은 한글로만 이루어져야 합니다.');
          return false;
        };
        setError(null);
        return true;
      },
      email: (value) => {
        if(!isEmail(value)) {
          setError('잘못된 이메일 형식입니다.');
          return false;
        }
        setError(null);
        return true;
      },
      username: (value) => {
        if(!isAlphanumeric(value) || !isLength(value, { min:4, max: 15 })) {
            setError('아이디는 4~15 글자의 알파벳 혹은 숫자로 이뤄져야 합니다.');
            return false;
        }
        setError(null);
        return true;
      },
      password: (value) => {
        if(!isLength(value, { min: 6 })) {
          console.log('비밀번호 검사중입니다.');
          setError('비밀번호를 6자 이상 입력하세요.');
          return false;
        }
        console.log('비밀번호 검사 완료');
        setError(null);
        return true;
      },
      passwordConfirm: (value) => {
        if(password !== value) {
          setError('비밀번호가 일치하지 않습니다.');
          return false;
        }
        setError(null);
        return true;
      }
    };
  

  const checkEmailExists = async (email) => {
    await dispatch(AuthActions.checkEmailExistsRequest(email));  
  };

  const checkUsernameExists = async (username) => {
    await dispatch(AuthActions.checkUsernameExistsRequest(username));
  };

  const handleLocalRegister = useCallback(
    async () => {
  
      if(error) return; // 현재 에러가 있는 상태라면 진행하지 않음
      if(!validate['name'](name)
          || !validate['email'](email) 
          || !validate['username'](username) 
          || !validate['password'](password) 
          || !validate['passwordConfirm'](passwordConfirm)) {
          // 하나라도 실패하면 진행하지 않음
          return;
      }
  
      // try {
      await dispatch(AuthActions.localRegisterRequest({
          name, email, username, password
      }));
      history.push('/'); // 회원가입 성공시 홈페이지로 이동
    }, [name, email, username, password, passwordConfirm, result])
  

  const handleChange = (e) => {
      const { name, value } = e.target;

      dispatch(AuthActions.changeInput({
        name,
        value,
        form: 'register'
      }));
  
      const validation = validate[name](value);
      if(name.indexOf('password') > -1 || !validation) return;
  
      const check = name === 'email' ? checkEmailExists : checkUsernameExists;
      check(value);
    };
  

  return (
    <div>
      <AuthContent title="회원가입">
        <InputWithLabel
          label="이름"
          name="name"
          placeholder="이름"
          value={name}
          onChange={handleChange}
        />
        <InputWithLabel
          label="이메일"
          name="email"
          placeholder="이메일"
          value={email}
          onChange={handleChange}
        />
        <InputWithLabel
          label="아이디"
          name="username"
          placeholder="아이디"
          value={username}
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
        <InputWithLabel
          label="비밀번호확인"
          name="passwordConfirm"
          type="password"
          placeholder="비밀번호확인"
          value={passwordConfirm}
          onChange={handleChange}
        />
      </AuthContent>
      {
        error && <AuthError>{error}</AuthError>
      }
      <AuthButton onClick={handleLocalRegister}>회원가입</AuthButton>
      <RightAlignedLink to="/auth/login">로그인</RightAlignedLink>
    </div>
  )
}

export default Register;