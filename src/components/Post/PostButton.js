import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

const Positioner = styled.div`
  text-align: right;

  margin-top: 2rem;
`;

const Button = styled(Link)`
  width: 2.5rem;
  border: 1px solid ${oc.teal[7]};
  color: ${oc.teal[7]};
  padding: 0.8rem 1.2rem;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Rajdhani';
  cursor: pointer;
  transition: .2s all;
  text-decoration: none;

  &:hover {
    background: ${oc.teal[6]};
    color: white;
  }
`;

const PostButton = ({onClick, children}) => (
  <Positioner>
    <Button onClick={onClick}>
      {children}
    </Button>
  </Positioner>
);

export default PostButton;