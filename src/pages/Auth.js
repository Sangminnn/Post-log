import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'redux/modules/base';
import { AuthWrapper } from 'components/Auth';
import { Route } from 'react-router-dom';
import { Login, Register, SocialRegister, Callback } from 'containers/Auth';


class Auth extends Component {
  componentWillMount() {
    this.props.BaseActions.setVisibility(false)
  }

  componentWillUnmount() {
    this.props.BaseActions.setVisibility(true)
  }

  render() {
    return (
      <AuthWrapper>
        <Route path="/auth/login" component={Login}/>
        <Route exact path="/auth/register" component={Register}/>
        <Route path="/auth/register/social" component={SocialRegister}/>
        <Route path="/auth/login/callback" component={Callback} />
        {/* <Route path="/auth/login/facebook/callback" component={Callback} /> */}
      </AuthWrapper>
    )
  }
}

export default connect(
  (state) => ({

  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(Auth);