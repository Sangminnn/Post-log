import React, { Component } from 'react';
import { Header, LoginButton, WelcomeMessage, MenuButton, MenuContent, UserMenu, Separator, MenuWrapper, RightAlignedContents, RotatedSquare } from 'components/Base/Header';
import { connect } from 'react-redux';
import * as userActions from 'redux/modules/user';
import * as baseActions from 'redux/modules/base';
import { bindActionCreators } from 'redux';
import storage from 'lib/storage';


class HeaderContainer extends Component {

    handleLogout = async () => {
        const { UserActions } = this.props;
        try {
            await UserActions.logout();
        } catch (e) {
            console.log(e);
        }

        storage.remove('loggedInfo');
        window.location.href = '/'; // 홈페이지로 새로고침
    }

    handleMenuToggle = async () => {
      const { menuToggle } = this.props;

      try { 
        await this.props.BaseActions.toggleMenu(!menuToggle);
      } catch (e) {
        console.log(e);
      } 
      console.log(menuToggle);
    }

    render() {
        const { visible, user, menuToggle } = this.props;
        if(!visible) return null;



        return (
            <Header>
                { user.get('logged') 
                    ? (<>
                        <WelcomeMessage>
                          {user.getIn(['loggedInfo', 'username'])}
                        </WelcomeMessage>
                        <RightAlignedContents>
                          <MenuButton onClick={this.handleMenuToggle}>
                            { menuToggle ? "메뉴 닫기" : "메뉴 열기" }
                          </MenuButton>
                            {
                              menuToggle && (
                                <>
                                  <MenuWrapper>
                                    <RotatedSquare/>
                                    <UserMenu>
                                      <MenuContent to='/post/write'>새 게시글</MenuContent>
                                      <Separator/>
                                      <MenuContent>유저정보</MenuContent>
                                      <Separator/>
                                      <MenuContent>로그아웃</MenuContent>
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
        );
    }
}

export default connect(
    (state) => ({
        visible: state.base.getIn(['header', 'visible']),
        menuToggle: state.base.getIn(['header', 'menuToggle']),
        user: state.user,
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch),
    })
)(HeaderContainer);