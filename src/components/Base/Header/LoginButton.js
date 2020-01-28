import React from 'react'
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  font-weight: 600;
  color: ${oc.cyan[7]}
  border-radius: 2px;
  border: 1px solid ${oc.cyan[6]};
  font-size: 14px;
  padding-right: 0.6rem;
  padding-left: 0.6rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  transition: .2s all;

  &:hover {
    background: ${oc.cyan[6]}
    color: white;
  }

  &:active {
    transform: translateY(3px);
  }  
`;
const LoginButton = ({ to, children }) => (
  <Button to={to}>
    {children}
  </Button>
)

export default LoginButton;