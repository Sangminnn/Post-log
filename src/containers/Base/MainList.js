import React, { useState, useEffect } from 'react';
import { PostItem } from 'components/Post';
import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import * as PostActions from 'actions/post';
import * as BaseActions from 'actions/base';

function MainList() {
  let history = useHistory();
  const dispatch = useDispatch();
  const posts = useSelector(state => state.base.posts);
  
  const [list, setList] = useState('');

  useEffect(() => {
    dispatch(BaseActions.loadPostsRequest());
  }, []);

  useEffect(() => {
    if(posts.length > 1) {
      setList(
        posts.map(
          post => (
            <PostItem
              onClick={(e) => loadPost(post._id)}
              key={post._id}
              title={post.title}
              author={post.author}
              date={post.createdAt.slice(0, 10)}
            >
              {post.content}
            </PostItem>
          )
        )
      )
    }
  }, [posts]);

  const loadPost = async (id) => {
    console.log(id);
    await dispatch(PostActions.setTarget(id));
    await dispatch(PostActions.loadPostRequest(id));

    history.push(`/post/readPost?id=${id}`);
  };
  return (
    <>
      { list }
    </>
  )
};

export default MainList;