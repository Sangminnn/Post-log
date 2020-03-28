import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Positioner = styled.div`
  display: flex;
`;

// const Title = styled.h2`
//   position: inline-block;
//   width: 8rem;
//   margin: 0.5rem 1rem;
//   letter-spacing: 3px;
// `;

const InputLabel = styled.input`
  padding: 0.8rem 1rem;
  width: 100%;
  outline: none;
  font-size: 1.5rem;
  font-family: 'Rajdhani';
  
  ::placeholder {
    color: ${oc.gray[3]};
  }
`;

const TitleForm = ({ ...rest }) => (
  <Positioner>
    <InputLabel { ...rest }/>
  </Positioner>
);

export default TitleForm;