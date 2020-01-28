import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from 'redux/modules/auth';

class Callback extends Component {

  initialize = async () => {
    const { AuthActions } = this.props;
    // const { access_token } = qs.parse(window.location.hash.substr(1));

    // function get_query(){
    //   var url = document.location.href;
    //   var qs = url.substring(url.indexOf('#') + 1).split('&');
    //   for(var i = 0, result = {}; i < qs.length; i++){
    //       qs[i] = qs[i].split('=');
    //       result[qs[i][0]] = decodeURIComponent(qs[i][1]);
    //   }
    //   return result;
  }

    // const id = get_query();
    // console.log(id);
    // console.log(id.access_token);
    
    // AuthActions.socialLogin({
    //   accessToken: id.access_token,
    //   provider: 'google',
    // });


    // fetch(PEOPLE_URI, {
      // headers: { Authorization: "Bearer " + id.access_token }
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data.contactGroups));
  // }

  componentDidMount() {
    this.initialize();
  }

  render() {
    // if (this.badRequest)
    return null;
  }
};


export default connect(
  (state) => ({
    
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(Callback);