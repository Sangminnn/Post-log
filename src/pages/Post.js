import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { PostWrapper } from 'components/Post';
import { Write, ReadPost } from 'containers/Post';

class Post extends Component {
  render() {
    return (
      <PostWrapper>
        <Route path='/post/write' component={Write}/>
        <Route path='/post/readPost' component={ReadPost}/>
      </PostWrapper>
    )
  }
}

export default Post;