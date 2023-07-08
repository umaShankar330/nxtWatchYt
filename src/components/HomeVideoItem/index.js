import {Link} from 'react-router-dom'

import {format, formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {
  MainContainer,
  VideoImage,
  ContentContainer,
  TextContainer,
  ChannelName,
  VideoTitle,
  ProfileImg,
  DateContainer,
} from './styledComponents'

import SavedContext from '../../Context'
import './index.css'

const HomeVideoItem = props => {
  const {details} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = details
  const {name, profileImageUrl} = channel

  //   const dateString = 'June 27, 2019'
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
              <VideoImage src={thumbnailUrl} alt="thumbnail url" />
              <ContentContainer>
                <ProfileImg src={profileImageUrl} alt="profile" />
                <TextContainer>
                  <VideoTitle isDark={isDark}>{title}</VideoTitle>
                  <ChannelName isDark={isDark}>{name}</ChannelName>
                  <DateContainer isDark={isDark}>
                    <ChannelName isDark={isDark}>{viewCount} views</ChannelName>
                    <BsDot />
                    <ChannelName isDark={isDark}>{publishedDiff}</ChannelName>
                  </DateContainer>
                </TextContainer>
              </ContentContainer>
            </MainContainer>
          </Link>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default HomeVideoItem
