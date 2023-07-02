import {FaMoon} from 'react-icons/fa'
import {VscThreeBars} from 'react-icons/vsc'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {IoSunnyOutline, IoExitOutline} from 'react-icons/io5'
import SavedContext from '../../Context'

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
} from './styledComponents'

const Navbar = props => (
  <SavedContext.Consumer>
    {value => {
      const {isDark, toggleTheme} = value
      const changeTheme = () => {
        toggleTheme()
      }
      const logoutUser = () => {
        console.log('trigger')
        Cookies.remove('jwt_token')
        const {history} = props
        history.push('/login')
      }

      return (
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
            <ExitIcon>
              <VscThreeBars />
            </ExitIcon>
            <ExitIcon>
              <IoExitOutline />
            </ExitIcon>
            <ProfileIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <Popup
              modal
              trigger={<LogoutBtn isDark={isDark}>Logout</LogoutBtn>}
            >
              {close => (
                <PopupContainer>
                  <div>
                    <PopupText>Are you sure you want to logout!</PopupText>
                  </div>
                  <PopupBtnContainer>
                    <CloseBtn onClick={() => close()}>Cancel</CloseBtn>
                    <ConfirmBtn onClick={logoutUser}>Confirm</ConfirmBtn>
                  </PopupBtnContainer>
                </PopupContainer>
              )}
            </Popup>
          </NavItems>
        </NavBarContainer>
      )
    }}
  </SavedContext.Consumer>
)

export default withRouter(Navbar)