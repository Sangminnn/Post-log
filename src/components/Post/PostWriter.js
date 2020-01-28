import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Positioner = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const PostArea = styled.textarea`
  width: 100%;
  font-size: 1.5rem;

  padding: 0.8rem 1rem;
  height: 500px;
  outline: none;
  
  resize: none;

  ::placeholder {
    color: ${oc.gray[3]};
  }
`;

const PostWriter = ({ ...rest }) => (
  <Positioner>
    <PostArea {...rest}/>
  </Positioner>
);

export default PostWriter;