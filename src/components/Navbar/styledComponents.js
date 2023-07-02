import styled from 'styled-components'

export const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 10vh;

  justify-content: space-between;
  padding: 20px 40px;
  margin: 0;
  background-color: ${props => (props.isDark ? '#212121' : 'white')};
  @media screen and (max-width: 768px) {
    padding: 15px 20px;
  }
`
export const NavLogo = styled.img`
  height: 40px;
  width: 150px;
  @media screen and (max-width: 768px) {
    height: 25px;
    width: 110px;
  }
`
export const NavItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const ThemeBtn = styled.button`
  border: none;
  outline: none;
  font-size: 24px;
  display: flex;
  align-items: center;
  background-color: transparent;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    margin-right: 0px;
  }
  color: ${props => (props.isDark ? 'white' : null)};
`
export const ProfileIcon = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ExitIcon = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  outline: none;
  font-size: 23px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutBtn = styled.button`
  height: 30px;
  width: 100px;
  background-color: transparent;
  border-radius: 3px;
  font-weight: 500;
  color: ${props => (props.isDark ? 'white' : '#3b82f6')};
  border: 2px solid ${props => (props.isDark ? 'white' : '#3b82f6')};
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 30px;
  background-color: black;
`
export const PopupText = styled.p`
  color: white;
`
export const PopupBtnContainer = styled.div`
  display: flex;
`
export const CloseBtn = styled.button`
  height: 30px;
  width: 100px;
  outline: none;
  border: 1px solid white;
  background-color: transparent;
  color: white;
`

export const ConfirmBtn = styled.button`
  height: 30px;
  width: 100px;
  outline: none;
  border: none;
  background-color: blue;
  color: white;
`