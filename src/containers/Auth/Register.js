import React, { Component } from 'react'
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink, AuthError } from 'components/Auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmail, isLength, isAlphanumeric } from 'validator';

import * as authActions from 'redux/modules/auth';
import * as userActions from 'redux/modules/user';

import storage from 'lib/storage';

class Register extends Component {
  componentWillUnmount() {
    const { AuthActions } = this.props;
    AuthActions.initializeForm('register');
  }

  setError = (message) => {
    const { AuthActions } = this.props;
    AuthActions.setError({
      form: 'register',
      message
    })
  }

  validate = {
    name: (value) => {
      const regex = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;

      if(value.match(regex)) {
        this.setError('이름은 한글로만 이루어져야 합니다.');
        return false;
      };
      return true;
    },
    email: (value) => {
      if(!isEmail(value)) {
        this.setError('잘못된 이메일 형식입니다.');
        return false;
      }
      return true;
    },
    username: (value) => {
      if(!isAlphanumeric(value) || !isLength(value, { min:4, max: 15 })) {
          this.setError('아이디는 4~15 글자의 알파벳 혹은 숫자로 이뤄져야 합니다.');
          return false;
      }
      return true;
    },
    password: (value) => {
      if(!isLength(value, { min: 6 })) {
        this.setError('비밀번호를 6자 이상 입력하세요.');
        return false;
      }
      this.setError(null);
      return true;
    },
    passwordConfirm: (value) => {
      if(this.props.form.get('password') !== value) {
        this.setError('비밀번호확인이 일치하지 않습니다.');
        return false;
      }
      this.setError(null);
      return true;
    }
  }

  checkEmailExists = async (email) => {
    const { AuthActions } = this.props;
    try {
      await AuthActions.checkEmailExists(email);
      if(this.props.exists.get('email')) {
        this.setError('이미 존재하는 이메일입니다.');
      } else {
        this.setError(null);
      }
    } catch (e) {
      console.log(e);
    }
  }

  checkUsernameExists = async (username) => {
    const { AuthActions } = this.props;
    try {
      await AuthActions.checkUsernameExists(username);
      if(this.props.exists.get('username')) {
        this.setError('이미 존재하는 아이디입니다.');
      } else {
        this.setError(null);
      }
    } catch (e) {
      console.log(e);
    }
  }

  handleLocalRegister = async () => {
    const { form, AuthActions, UserActions, error, history } = this.props;
    const { name, email, username, password, passwordConfirm } = form.toJS();

    const { validate } = this;

    if(error) return; // 현재 에러가 있는 상태라면 진행하지 않음
    if(!validate['name'](name)
        || !validate['email'](email) 
        || !validate['username'](username) 
        || !validate['password'](password) 
        || !validate['passwordConfirm'](passwordConfirm)) { 
        // 하나라도 실패하면 진행하지 않음
        return;
    }

    try {
        await AuthActions.localRegister({
            name, email, username, password
        });
        const loggedInfo = this.props.result.toJS();
        console.log(loggedInfo);
        // TODO: 로그인 정보 저장 (로컬스토리지/스토어)

        storage.set('loggedInfo', loggedInfo);
        UserActions.setLoggedInfo(loggedInfo);
        UserActions.setValidated(true);

        history.push('/'); // 회원가입 성공시 홈페이지로 이동
    } catch(e) {
        // 에러 처리하기
        if(e.response.status === 409) {
            const { key } = e.response.data;
            const message = key === 'email' ? '이미 존재하는 이메일입니다.' : '이미 존재하는 아이디입니다.';
            return this.setError(message);
        }
        this.setError('알 수 없는 에러가 발생했습니다.')
    }
  }    


  handleChange = (e) => {
    const { AuthActions } = this.props;
    const { name, value } = e.target;

    AuthActions.changeInput({
      name,
      value,
      form: 'register'
    });

    const validation = this.validate[name](value);
    if(name.indexOf('password') > -1 || !validation) return;

    const check = name === 'email' ? this.checkEmailExists : this.checkUsernameExists
    check(value);
  }

  render() {
    const { name, email, username, password, passwordConfirm } = this.props.form.toJS();
    const { handleChange, handleLocalRegister } = this;
    const { error } = this.props;

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
}

export default connect(
  (state) => ({
    form: state.auth.getIn(['register', 'form']),
    error: state.auth.getIn(['register', 'error']),
    exists: state.auth.getIn(['register', 'exists']),
    result: state.auth.get('result'),
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch),
  })
)(Register);