import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils';


const Positioner = styled.div`
  display: flex;
  justify-content: center;
  // flex: 1;
  padding: 2rem 1rem;
`;

const ShadowedBox = styled.div`
  ${shadow(0)};

  width: 300px;

  @media (max-width: 949px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 1rem 0.8rem 1rem 0.8rem;
  height: 300px;
`

const Author = styled.div`
  padding-left: 0.5rem;

  color: ${oc.teal[5]};
  font-size: 1rem;
`;

const Title = styled.div`
  margin-top: 1rem;
  padding-left: 0.5rem;

  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 1px;

  cursor: pointer;
`;

const Ref = styled.div`
  height: 1rem;
  display: flex;
`;

const Spacer = styled.div`
  flex: 1;
`;

const Date = styled.div`
  font-size: 1rem;
  color: ${oc.gray[5]};
`

const Border = styled.div`
  margin-top: 0.5rem;

  height: 1px;
  background-color: ${oc.gray[5]};
`;

const Content = styled.div`
  margin-top: 0.5rem;
  
  padding-left: 0.5rem;
`;

const PostItem = ({onClick, title, author, date, children}) => (
  <Positioner>
    <ShadowedBox>
      <Wrapper>
        <Author>
          {author}
        </Author>
        <Title onClick={onClick}>
          {title}
        </Title>
        <Ref>
          <Spacer/>
          <Date>
            {date}
          </Date>
        </Ref>
        <Border/>
        <Content>
          {children}
        </Content>
      </Wrapper>
    </ShadowedBox>
  </Positioner>
);

export default PostItem;