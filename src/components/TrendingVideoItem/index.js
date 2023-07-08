import {Link} from 'react-router-dom'
import {format, formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {
  MainContainer,
  VideoImg,
  VideoText,
  TextContainer,
  VideoTitle,
  CountContainer,
} from './styledComponents'

import './index.css'
import SavedContext from '../../Context'

const TrendingVideoItem = props => {
  const {details} = props
  const {id, thumbnailUrl, title, viewCount, publishedAt, channel} = details
  const {name} = channel
  const date = new Date(publishedAt)
  const formattedDate = format(date, 'yyyy, M, d')
  const specificDate = new Date(formattedDate)
  const difference = formatDistanceToNow(specificDate, {addSuffix: true})
  const modifiedDifference = difference.split(' ')[1]
  const publishedDiff = `${modifiedDifference} years ago`
  return (
    <SavedContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link className="link" to={`/videos/${id}`}>
            <MainContainer isDark={isDark}>
              <VideoImg src={thumbnailUrl} alt="video thumbnail" />
              <TextContainer>
                <VideoTitle isDark={isDark}>{title}</VideoTitle>
                <VideoText isDark={isDark}>{name}</VideoText>
                <CountContainer isDark={isDark}>
                  <VideoText isDark={isDark}>{viewCount}</VideoText>
                  <BsDot />
                  <VideoText isDark={isDark}>{publishedDiff}</VideoText>
                </CountContainer>
              </TextContainer>
            </MainContainer>
          </Link>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default TrendingVideoItem
