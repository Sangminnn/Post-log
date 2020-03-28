import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Positioner = styled.div`
  position: absolute;
  right: 1rem;
  transform: translateY(-50%) rotate(45deg);
  
  width: 1.3rem;
  height: 1.3rem;
  background: ${oc.teal[4]};
  z-index: 0;
`;

const RotatedSquare = () => (
  <Positioner/>
);

export default RotatedSquare;