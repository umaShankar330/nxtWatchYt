import {Link} from 'react-router-dom'
import {
  MainContainer,
  VideoImg,
  VideoText,
  VideoTitle,
} from './styledComponents'

import './index.css'

import SavedContext from '../../Context'

const GamingVideoItem = props => {
  const {details} = props
  const {id, thumbnailUrl, title, viewCount} = details
  return (
    <SavedContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link className="link" to={`/videos/${id}`}>
            <MainContainer isDark={isDark}>
              <VideoImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoTitle isDark={isDark}>{title}</VideoTitle>
              <VideoText isDark={isDark}>
                {viewCount} Watching Worldwide
              </VideoText>
            </MainContainer>
          </Link>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default GamingVideoItem
