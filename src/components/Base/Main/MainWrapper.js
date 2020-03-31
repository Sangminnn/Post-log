import React from 'react';
import styled from 'styled-components';
import { shadow } from 'lib/styleUtils';

const Positioner = styled.section`
  display: flex;
  width: 100%;
  padding-left: 7rem;
  padding-right: 7rem;
  position: relative;
`;

const ShadowedBox = styled.section`
  width: 1300px;
  ${shadow(1)};
`;

const ContentsWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;

  padding: 6rem 3rem;
`;

const MainWrapper = ({children}) => (
  <Positioner>
    <ShadowedBox>
      <ContentsWrapper>
        {children}
      </ContentsWrapper>
    </ShadowedBox>
  </Positioner>
);

export default MainWrapper;