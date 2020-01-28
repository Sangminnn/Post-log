import React, { Component } from 'react';
import { PostItem } from 'components/Post';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as postActions from 'redux/modules/post';
import * as baseActions from 'redux/modules/base';


class PostList extends Component {

  componentDidMount() {
    this.props.BaseActions.loadPosts();
  }

  loadPost = async (id) => {
    const { PostActions, history } = this.props;

    try {
      await PostActions.setTarget(id);
      const { targetId } = this.props;

      const loadId = targetId.toJS().key;

      await PostActions.loadPost(loadId);
      history.push('/post/readPost');
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { posts } = this.props;

    const postList = posts.map(
      post => (
        <PostItem
          onClick={(e) => this.loadPost(post._id)}
          key={post._id}
          title={post.title}
          author={post.author}
          date={post.createdAt.slice(0, 10)}
        >
          {post.content}
        </PostItem>
      )
    )

    return (
      <>
        { postList }
      </>
    )
  }
};

export default connect(
  (state) => ({
    targetId: state.post.get('targetId'),
    posts: state.base.get('posts')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    PostActions: bindActionCreators(postActions, dispatch),
  })
)(PostList);