import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Border = styled.div`
  height: 1px;
  background-color: ${oc.gray[4]};
`

const Separator = () => (
  <Border/>
);

export default Separator;