import React, { useState } from 'react';
import { Posting, PostWriter, PostButton, TitleForm, PostListWrapper } from 'components/Post';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as PostActions from 'actions/post';

function Write() {
  let history = useHistory();
  const dispatch = useDispatch();
  const loggedInfo = useSelector(state => state.user.loggedInfo);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 너무 빈번하게 호출되는것같음 .
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if(name === 'title') {
      setTitle(value);
    } else {
      setContent(value);
    }
  };

  const handleSubmit = async () => {
    const author = loggedInfo.username;

    await dispatch(PostActions.postRegisterRequest({ title, content, author }));

    history.push('/');
  };

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
};

export default Write;