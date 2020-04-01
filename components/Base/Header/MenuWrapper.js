import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`  
  position: relative;
`

const Positioner = styled.div`
  position: absolute;
  width: 10rem;
  right: 0;
  top: 2.3rem;
  background: ${oc.gray[1]};
  border: 1px solid ${oc.teal[3]};
`

const MenuWrapper = ({children}) => (
  <Wrapper>
    <Positioner>
      {children}
    </Positioner>
  </Wrapper>
);

export default MenuWrapper;