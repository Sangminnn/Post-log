import React, { Component } from 'react'
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink, AuthError, ForbiddenInput } from 'components/Auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isLength, isAlphanumeric } from 'validator';

import * as authActions from 'redux/modules/auth';
import * as userActions from 'redux/modules/user';

import storage from 'lib/storage';

class Register extends Component {
  componentWillUnmount() {
    const { AuthActions } = this.props;
    AuthActions.initializeForm('socialRegister');
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
    username: (value) => {
      if(!isAlphanumeric(value) || !isLength(value, { min:4, max: 15 })) {
          this.setError('아이디는 4~15 글자의 알파벳 혹은 숫자로 이뤄져야 합니다.');
          return false;
      }
      return true;
    }
  }

  checkUsernameExists = async (username) => {
    const { AuthActions } = this.props;
    try {
      await AuthActions.checkUsernameExists(username);
      // await AuthActions.checkUsername
      if(this.props.exists.get('username')) {
        this.setError('이미 존재하는 아이디입니다.');
      } else {
        this.setError(null);
      }
    } catch (e) {
      console.log(e);
    }
  }
 

  // custom 필요
  handleSocialRegister = async () => {
    const { socialAuthResult, socialRegister, AuthActions, UserActions, error, history } = this.props;
    const { name, email, username } = socialRegister.toJS();
    
    console.log(socialAuthResult);
    const { accessToken, provider } = socialAuthResult;

    const { validate } = this;

    if(error) return; // 현재 에러가 있는 상태라면 진행하지 않음
    if(!validate['name'](name) || !validate['username'](username)) { 
        // 하나라도 실패하면 진행하지 않음
        return;
    }

    try {
        await AuthActions.socialRegister({
            name, email, username, provider, accessToken
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
            return this.setError('이미 존재하는 아이디입니다.');
            // const message = key === 'email' ? '이미 존재하는 이메일입니다.' : '이미 존재하는 아이디입니다.';
            // return this.setError(message);
        }
        this.setError('알 수 없는 에러가 발생했습니다.');
    }
  }


  handleChange = (e) => {
    const { AuthActions } = this.props;
    const { name, value } = e.target;

    AuthActions.changeSocialInput({
      name,
      value,
    });

    if(name === 'username') this.checkUsernameExists(value);
  }

  render() {
    const { name, email, username } = this.props.socialRegister.toJS();
    const { handleChange, handleSocialRegister } = this;
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
            name="username"
            placeholder="아이디"
            value={username}
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
}

export default connect(
  (state) => ({
    socialRegister: state.auth.get('socialRegister'),
    socialAuthResult: state.auth.get('socialAuthResult'),
    result: state.auth.get('result'),
    exists: state.auth.getIn(['register', 'exists']),
    error: state.auth.getIn(['register', 'error']),
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch),
  })
)(Register);