import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { PostWrapper } from 'components/Post';
import { Write, ReadPost, PostList } from 'containers/Post';

class Post extends Component {
  render() {
    return (
      <PostWrapper>
        <Route path='/post/write' component={Write}/>
        <Route path='/post/readPost' component={ReadPost}/>
        <Route path='/post/postList' component={PostList}/>
      </PostWrapper>
    )
  }
}

export default Post;