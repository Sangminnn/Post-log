import React from 'react'
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils';

const Wrapper = styled.div`
  color: white;
  background-color: ${oc.teal[6]};

  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;

  cursor: pointer;
  user-select: none;
  transition: .2s all;

  &:hover {
    background: ${oc.teal[5]};
    ${shadow(0)};
  }
`

const AuthButton = ({ children, onClick }) => (
  <Wrapper onClick={onClick}>
    {children}
  </Wrapper>
)

export default AuthButton;