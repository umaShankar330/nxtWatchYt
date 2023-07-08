import {Component} from 'react'
import {
  MainContainer,
  NoSavedContainer,
  NoSavedImg,
  NoSavedTitle,
  NoSavedText,
  SavedListContainer,
} from './styledComponents'
import SavedItem from './SavedItem/savedItem'
import SavedContext from '../../Context'

class SavedVideos extends Component {
  state = {isLoading: true}

  componentDidMount() {
    this.setState({isLoading: false})
    console.log('198')
  }

  renderNoSavedSection = isDark => (
    <NoSavedContainer isDark={isDark}>
      <NoSavedImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoSavedTitle isDark={isDark}>No saved videos found</NoSavedTitle>
      <NoSavedText isDark={isDark}>
        You can save your videos while watching them
      </NoSavedText>
    </NoSavedContainer>
  )

  renderSavedVideos = (savedList, isDark) => (
    <MainContainer data-testid="savedVideos" isDark={isDark}>
      <h1>Saved Videos</h1>
      <SavedListContainer isDark={isDark}>
        {savedList.map(eachItem => (
          <SavedItem key={eachItem.id} details={eachItem} />
        ))}
      </SavedListContainer>
    </MainContainer>
  )

  renderSavedItems = (savedList, isDark) =>
    savedList.length === 0
      ? this.renderNoSavedSection(isDark)
      : this.renderSavedVideos(savedList, isDark)

  render() {
    const {isLoading} = this.state
    console.log(isLoading)
    return (
      <SavedContext.Consumer>
        {value => {
          const {savedList, isDark} = value
          console.log(savedList, 'saved')
          return this.renderSavedItems(savedList, isDark)
        }}
      </SavedContext.Consumer>
    )
  }
}

export default SavedVideos
