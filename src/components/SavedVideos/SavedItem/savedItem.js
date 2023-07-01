import {Link} from 'react-router-dom'
import {format, formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {
  MainContainer,
  ImgElement,
  TextContainer,
  VideoTitle,
  ChannelName,
  CountContainer,
  CountText,
} from './savedItemStyle'
import SavedContext from '../../../Context'
import './index.css'

const SavedItem = props => {
  const {details} = props
  const {thumbnailUrl, id, title, viewCount, publishedAt, channel} = details
  const {name} = channel
  console.log(details, 'channel')
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
            <MainContainer key={id} isDark={isDark}>
              <ImgElement src={thumbnailUrl} alt="thumbnailUrl" />
              <TextContainer>
                <VideoTitle isDark={isDark}>{title}</VideoTitle>
                <ChannelName isDark={isDark}>{name}</ChannelName>
                <CountContainer>
                  <CountText isDark={isDark}>{viewCount} views</CountText>
                  <BsDot />
                  <CountText isDark={isDark}>{publishedDiff}</CountText>
                </CountContainer>
              </TextContainer>
            </MainContainer>
          </Link>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default SavedItem
