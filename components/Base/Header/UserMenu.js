import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 1;
`

const UserMenu = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default UserMenu;