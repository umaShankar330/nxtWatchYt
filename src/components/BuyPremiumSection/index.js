import {AiOutlineClose} from 'react-icons/ai'
import SavedContext from '../../Context'
import {
  MainContainer,
  WebsiteLogo,
  Text,
  BuyBtn,
  LogoContainer,
} from './styledComponents'

const BuyPremiumSection = () => (
  <SavedContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <MainContainer isDark={isDark}>
          <LogoContainer>
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
            <AiOutlineClose />
          </LogoContainer>
          <Text>Buy Nxt Watch Premium Prepaid plans with UPI</Text>
          <BuyBtn>Buy Now</BuyBtn>
        </MainContainer>
      )
    }}
  </SavedContext.Consumer>
)

export default BuyPremiumSection
