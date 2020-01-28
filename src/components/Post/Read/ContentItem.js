import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { shadow } from 'lib/styleUtils';

const Positioner = styled.div`
  padding: 4rem 2rem;
`;

const Wrapper = styled.div`

`;

const TitleWrapper = styled.div`
  margin-bottom: 2rem;
  border-bottom: 1px solid ${oc.gray[6]};
`;

const Author = styled.div`
  color: ${oc.teal[3]};
`;

const Title = styled.div`
  margin-top: 1rem;
  font-size: 2rem;
  
  font-family: 'Rajdhani'
`;

const Time = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: ${oc.gray[5]};
`;

const Content = styled.div`

`;

const ContentItem = ({author, title, time, content}) => (
  <Positioner>
    <Wrapper>
      <TitleWrapper>
        <Author>{author}</Author>
        <Title>{title}</Title>
        <Time>{time}</Time>
      </TitleWrapper>
      <Content>
        {content}
      </Content>
    </Wrapper>
  </Positioner>
);

export default ContentItem;