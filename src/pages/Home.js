import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { MainWrapper } from 'components/Base/Main';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends Component {

  render() {
    return (
      <MainWrapper>
        메인페이지입니다.
      </MainWrapper>
    )
  }
}

export default connect(
  (state) => ({
    
  }),
  (dispatch) => ({
    
  })
)(Home);