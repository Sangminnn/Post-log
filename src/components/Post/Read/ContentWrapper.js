import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`

const ContentWrapper = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default ContentWrapper;