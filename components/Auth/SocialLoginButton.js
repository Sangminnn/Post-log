import React from 'react'
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils';

const Wrapper = styled.div`
  color: white;
  background-color: ${props => (props.type === 'google') ? oc.red[7] : oc.blue[5]};

  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;

  cursor: pointer;
  user-select: none;
  transition: .2s all;

  &:hover {
    background: ${props => (props.type === 'google') ? oc.red[6] : oc.blue[4] };
    ${shadow(0)};
  }

`

const SocialButton = ({ type, onSocialLogin }) => (
  <Wrapper type={type} onClick={() => onSocialLogin(type)}>
    {type} 로그인하기
  </Wrapper>
)

export default SocialButton;