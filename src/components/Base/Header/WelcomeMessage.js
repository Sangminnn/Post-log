import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Message = styled.div`
  margin-right: 1rem;
  color: ${oc.teal[7]};
  font-weight: 500;
  letter-spacing: 1px;
`;

const WelcomeMessage = ({children}) => (
  <Message>
    {children} 님 환영합니다.
  </Message>
);

export default WelcomeMessage;
