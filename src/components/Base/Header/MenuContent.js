import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

const Text = styled(Link)`
  display: inline-block;
  padding: 0.6rem 0.5rem;
  width: 100%;
  color: ${oc.teal[3]};
  font-family: 'Rajdhani';
  text-decoration: none;
  transition: .2s all;
  z-index: 10;

  &:hover {
    background: ${oc.cyan[6]}
    color: white;
  }
`;

const MenuContent = ({to, children, onClick}) => (
    <Text to={to} onClick={onClick}>
      {children}
    </Text>
);

export default MenuContent;