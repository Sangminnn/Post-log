import React from 'react'
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

const Positioner = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 10;
`;

const WhiteBackground = styled.div`
  background: white;
  display: flex;
  justify-content: center;
`;

const HeaderContents = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1200px;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: 'Rajdhani';
  color: ${oc.teal[6]};
  font-size: 1.4rem;
  text-decoration: none;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const GradientBorder = styled.div`
  height: 3px;
  background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;

const Header = ({children}) => {
  return (
    <Positioner>
      <WhiteBackground>
        <HeaderContents>
          <Logo to="/">Logo</Logo>
          <Spacer/>
          {children}
        </HeaderContents>
      </WhiteBackground>
      <GradientBorder/>
    </Positioner>
  )
}

export default Header;