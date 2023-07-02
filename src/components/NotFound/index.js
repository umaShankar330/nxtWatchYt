import SavedContext from '../../Context'
import {
  NoSavedContainer,
  NoSavedImg,
  NoSavedTitle,
  NoSavedText,
} from './styledComponents'

const NotFound = () => (
  <SavedContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <NoSavedContainer isDark={isDark}>
          <NoSavedImg
            src={
              isDark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
            }
            alt="no saved videos"
          />
          <NoSavedTitle isDark={isDark}>No saved videos found</NoSavedTitle>
          <NoSavedText isDark={isDark}>
            You can save your videos while watching them
          </NoSavedText>
        </NoSavedContainer>
      )
    }}
  </SavedContext.Consumer>
)

export default NotFound
