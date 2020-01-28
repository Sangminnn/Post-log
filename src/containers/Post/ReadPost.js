import React, { Component } from 'react'
import { ContentWrapper, ContentItem } from 'components/Post/Read';
import { connect } from 'react-redux';

class ReadPost extends Component {
  render() {
    const { loadPost } = this.props;
    console.log(loadPost);
    const { title, author, content, createdAt } = loadPost.toJS();

    return (
      <ContentWrapper>
        <ContentItem
          author={author}
          title={title}
          time={createdAt.slice(0,10)}
          content={content}
        />
      </ContentWrapper>
    )
  }
}

export default connect(
  (state) => ({
    loadPost: state.post.get('loadPost'),
  }),
  (dispatch) => ({

  })
)(ReadPost);