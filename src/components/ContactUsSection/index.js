import SavedContext from '../../Context'
import {
  SectionContainer,
  SectionTitle,
  IconsContainer,
  ImageItem,
  ImageBtn,
  Text,
} from './styledComponents'

const ContactUsSection = () => (
  <SavedContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <SectionContainer>
          <SectionTitle isDark={isDark}>CONTACT US</SectionTitle>
          <IconsContainer>
            <ImageBtn>
              <ImageItem
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
            </ImageBtn>
            <ImageBtn>
              <ImageItem
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
            </ImageBtn>
            <ImageBtn>
              <ImageItem
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ImageBtn>
          </IconsContainer>
          <Text isDark={isDark}>
            Enjoy! Now to see your channels and recommendations!
          </Text>
        </SectionContainer>
      )
    }}
  </SavedContext.Consumer>
)
export default ContactUsSection
