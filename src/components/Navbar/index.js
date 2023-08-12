import {Component} from 'react'
import {FaMoon} from 'react-icons/fa'
import {VscThreeBars} from 'react-icons/vsc'
import {withRouter, Link} from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {IoSunnyOutline, IoExitOutline} from 'react-icons/io5'
import SavedContext from '../../Context'
import ItemSection from '../ItemsSection'
import './index.css'
import {
  NavBarContainer,
  NavLogo,
  NavItems,
  ThemeBtn,
  ProfileIcon,
  LogoutBtn,
  ExitIcon,
  PopupContainer,
  PopupText,
  PopupBtnContainer,
  CloseBtn,
  ConfirmBtn,
  DisplaySection,
  NavSectionContainer,
  ExitBtn,
} from './styledComponents'

class Navbar extends Component {
  state = {isCollapse: false}

  toggleCollapse = () => {
    this.setState(prevState => ({isCollapse: !prevState.isCollapse}))
  }

  render() {
    const {isCollapse} = this.state
    return (
      <SavedContext.Consumer>
        {value => {
          const {isDark, toggleTheme} = value
          const changeTheme = () => {
            toggleTheme()
          }
          const logoutUser = () => {
            console.log('trigger')
            Cookies.remove('jwt_token')
            const {history} = this.props
            history.replace('/login')
          }

          return (
            <NavSectionContainer>
              <NavBarContainer isDark={isDark}>
                <Link to="/">
                  <NavLogo
                    src={
                      isDark
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                  />
                </Link>
                <NavItems>
                  <ThemeBtn
                    data-testid="theme"
                    onClick={changeTheme}
                    isDark={isDark}
                    type="button"
                  >
                    {isDark ? <IoSunnyOutline /> : <FaMoon />}
                  </ThemeBtn>
                  <ExitIcon isDark={isDark} onClick={this.toggleCollapse}>
                    {isCollapse ? <AiOutlineClose /> : <VscThreeBars />}
                  </ExitIcon>

                  <ProfileIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />

                  <Popup
                    modal
                    trigger={
                      <ExitBtn>
                        <LogoutBtn isDark={isDark}>Logout</LogoutBtn>
                        <ExitIcon isDark={isDark}>
                          <IoExitOutline />
                        </ExitIcon>
                      </ExitBtn>
                    }
                  >
                    {close => (
                      <PopupContainer className="pop-up-section">
                        <div className="pop-card">
                          <div>
                            <PopupText>
                              Are you sure, you want to logout?
                            </PopupText>
                          </div>
                          <PopupBtnContainer>
                            <CloseBtn onClick={() => close()}>Cancel</CloseBtn>
                            <ConfirmBtn onClick={logoutUser}>
                              Confirm
                            </ConfirmBtn>
                          </PopupBtnContainer>
                        </div>
                      </PopupContainer>
                    )}
                  </Popup>
                </NavItems>
              </NavBarContainer>
              <DisplaySection isCollapse={isCollapse}>
                <ItemSection />
              </DisplaySection>
            </NavSectionContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default withRouter(Navbar)
