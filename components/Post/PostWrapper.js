import React from 'react';
import styled from 'styled-components';
import { shadow } from 'lib/styleUtils';

const Positioner = styled.div`
  display: flex;
  width: 100%;
  padding-left: 7rem;
  padding-right: 7rem;
  position: relative;


  @media (max-width: 748px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

`;

const ShadowedBox = styled.div`
  width: 1300px;
  ${shadow(1)};
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  padding: 6rem 3rem;

  @media (max-width: 748px) {
    padding: 3rem 1rem;
  }
`;

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