import React from 'react';
import styled from 'styled-components';

const Positioner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`

const RightAlignedContents = ({children}) => (
  <Positioner>
    {children}
  </Positioner>
);

export default RightAlignedContents;