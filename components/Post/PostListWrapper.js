import React from 'react';
import styled from 'styled-components';

const Positioner = styled.div`
  display: flex;
  flex: 1;
`;

const PostListWrapper = ({ children }) => (
  <Positioner>
    { children }
  </Positioner>
);

export default PostListWrapper;