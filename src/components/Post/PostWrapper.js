import React from 'react';
import styled from 'styled-components';
import { shadow } from 'lib/styleUtils';

const Positioner = styled.div`
  display: flex;
  width: 100%;
  padding-left: 7rem;
  padding-right: 7rem;
  position: relative;
`;

const ShadowedBox = styled.div`
  width: 1300px;
  ${shadow(1)};
`

const ContentsWrapper = styled.div`
  padding: 6rem 3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const PostWrapper = ({children}) => (
  <Positioner>
    <ShadowedBox>
      <ContentsWrapper>
        {children}
      </ContentsWrapper>
    </ShadowedBox>
  </Positioner>
);

export default PostWrapper;