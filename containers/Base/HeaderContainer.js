import React, { useEffect } from 'react';
import { Header, LoginButton, WelcomeMessage, MenuButton, MenuContent, UserMenu, Separator, MenuWrapper, RightAlignedContents, RotatedSquare } from 'components/Base/Header';
import { useSelector, useDispatch } from 'react-redux';

import * as UserActions from 'actions/user';
import * as BaseActions from 'actions/base';

import storage from 'lib/storage';

function HeaderContainer() {
  const dispatch = useDispatch();
  
  const visible = useSelector(state => state.base.header.visible);
  const menuToggle = useSelector(state => state.base.header.menuToggle);
  const user = useSelector(state => state.user);

  const logged = useSelector(state => state.user.logged);
  
  const handleLogout = async () => {
    console.log('로그아웃 헤더측 실행');
    await dispatch(UserActions.logoutRequest());
    storage.remove('loggedInfo');
    window.location.href = '/';
  };

  const handleMenuToggle = async () => {
    try {
      await dispatch(BaseActions.toggleMenu(!menuToggle));
    } catch (e) {
      console.log(e);
    }
    console.log(menuToggle);
  }

  // visible이 없다면 null return 
  if(!visible) return null;

  return (
      <Header>
      { logged
          ? (<>
              <WelcomeMessage>
                { user['loggedInfo']['username'] }
              </WelcomeMessage>
              <RightAlignedContents>
                <MenuButton onClick={handleMenuToggle}>
                  { menuToggle ? "메뉴 닫기" : "메뉴 열기" }
                </MenuButton>
                  {
                    menuToggle && (
                      <>
                        <MenuWrapper>
                          <RotatedSquare/>
                          <UserMenu>
                            <MenuContent to='/post/write' onClick={handleMenuToggle}>새 게시글</MenuContent>
                            <Separator/>
                            <MenuContent onClick={handleMenuToggle}>유저정보</MenuContent>
                            <Separator/>
                            <MenuContent onClick={handleLogout}>로그아웃</MenuContent>
                          </UserMenu>
                        </MenuWrapper>
                      </>
                    )
                  }
              </RightAlignedContents>
          </> )
          : <LoginButton to='/auth/login'>로그인 / 가입</LoginButton>
      }
    </Header>   
  )
};

export default HeaderContainer;