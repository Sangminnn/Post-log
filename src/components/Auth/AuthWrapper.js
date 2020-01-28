import React from 'react'
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils';
import { Link } from 'react-router-dom';

const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ShadowedBox = styled.div`
  width: 500px;
  ${shadow(2)};
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${oc.teal[5]};
  height: 5rem;
`;

const Logo = styled(Link)`
  color: white;
  font-family: 'Rajdhani'
  font-size: 2.4rem;
  text-decoration: none;
  letter-spacing: 5px;
`

const Contents = styled.div`
  background: white;
  padding: 2rem;
  height: auto;
`;


const AuthWrapper = ({children}) => (
  <Positioner>
    <ShadowedBox>
      <LogoWrapper>
        <Logo to="/">HELLO</Logo>
      </LogoWrapper>
      <Contents>
        {children}
      </Contents>
    </ShadowedBox>
  </Positioner>
);

export default AuthWrapper;