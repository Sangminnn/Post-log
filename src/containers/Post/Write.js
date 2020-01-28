import React, { Component } from 'react';
import { Posting, PostWriter, PostButton, TitleForm } from 'components/Post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as postActions from 'redux/modules/post';

class Write extends Component {
  handleChange = (e) => {
    const { PostActions } = this.props;
    const { name, value } = e.target;
    
    PostActions.changeInput({
      name,
      value
    });
    // console.log(name, value, author);
  }

  handleSubmit = async () => {
    const { PostActions, history } = this.props;
    const { title, content } = this.props.post.toJS();
    const author = this.props.loggedInfo.toJS().username;

    try {
      await PostActions.postRegister({ title, content, author });

      history.push('/');
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { handleChange, handleSubmit } = this;
    // const { title, content } = this.props.post.toJS();

    return (
      <Posting>
        <TitleForm
          name="title"
          placeholder="제목을 입력하세요"
          onChange={handleChange}
        />
        <PostWriter
          name="content"
          placeholder="내용을 입력하세요"
          onChange={handleChange}
        />
        <PostButton onClick={handleSubmit}>
          포스팅하기
        </PostButton>
      </Posting>  
    )
  }
}

export default connect(
  (state) => ({
    post: state.post.get('post'),
    loggedInfo: state.user.get('loggedInfo'),
  }),
  (dispatch) => ({
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(Write);