import React from 'react';
import { ContentWrapper, ContentItem } from 'components/Post/Read';
import { useSelector } from 'react-redux';


function ReadPost() {

  const { title, author, content, createdAt } = useSelector(state => state.post.loadPost);

  return (
    <ContentWrapper>
      <ContentItem
        author={author}
        title={title}
        time={createdAt}
        content={content}
      />
    </ContentWrapper>
  )
};

export default ReadPost;