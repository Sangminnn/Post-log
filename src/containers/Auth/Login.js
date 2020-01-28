import React, { Component } from 'react'
import { AuthContent, InputWithLabel, AuthButton, SocialLoginButton, RightAlignedLink, AuthError } from 'components/Auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from 'redux/modules/auth';
import * as userActions from 'redux/modules/user';

import storage from 'lib/storage';

class Login extends Component {

  componentWillUnmount() {
    const { AuthActions } = this.props;
    AuthActions.initializeForm('login');
  }

  handleChange = (e) => {
    const { AuthActions } = this.props;
    const { name, value } = e.target;

    AuthActions.changeInput({
      name,
      value,
      form: 'login'
    });
  }

  setError = (message) => {
    const { AuthActions } = this.props;
    AuthActions.setError({
      form: 'login',
      message
    });
    return false;
  }

  handleLocalLogin = async () => {
    const { form, AuthActions, UserActions, history } = this.props;
    const { email, password } = form.toJS();

    try {
      await AuthActions.localLogin({ email, password });
      const loggedInfo = this.props.result.toJS();
      
      UserActions.setLoggedInfo(loggedInfo);
      history.push('/post/postList');
      storage.set('loggedInfo', loggedInfo);
    } catch (e) {

      console.log('a');
      this.setError('잘못된 계정정보입니다.'); 
    }
  }

  onSocialLogin = async (provider) => {
    const { UserActions, AuthActions, history } = this.props;

    try {
      await AuthActions.getSocialToken(provider);
      
      const { accessToken } = this.props.socialAuthResult;
      
      await AuthActions.socialExists({provider, accessToken});

      const { email } = this.props.result.toJS();
      console.log(email);
      if(!email) {
        // 유저 profile에 대한 객체가 넘어올거임(유저정보가 있을경우 받아서 Loggedinfo에 넣어줌)
        console.log('유저정보 있음');
        const loggedInfo = this.props.result.toJS();

        UserActions.setLoggedInfo(loggedInfo);
        history.push('/post/postList');
        storage.set('loggedInfo', loggedInfo);
      } else {
        // email값을 params로 보내는 ? 혹은 그 값을 value로 넣어 보내주는 로직
        // history.push('/register/social')쪽으로 보내면 될듯
        // 근데 params는 조작 여부가 있지않을까
        // setEmail함수를 만드는 ...?
        console.log('유저정보 없음');
        await AuthActions.setEmail(email);
        history.push('/auth/register/social');
      }

    } catch (e) {
      console.log(e);
      this.setError('잘못된 계정정보입니다.');
    }
  }

  render() {
    const { email, password } = this.props.form.toJS();
    const { handleChange, handleLocalLogin, onSocialLogin } = this;
    const { error } = this.props;

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
  }
}

export default connect(
  (state) => ({
    form: state.auth.getIn(['login', 'form']),
    error: state.auth.getIn(['login', 'error']),
    result: state.auth.get('result'),
    socialAuthResult: state.auth.get('socialAuthResult'),
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(Login);