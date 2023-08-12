import {Component} from 'react'
import ReactPlayer from 'react-player'
import {format, formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {BsDot} from 'react-icons/bs'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {RiPlayListAddLine} from 'react-icons/ri'
import SavedContext from '../../Context'
import './index.css'
import {
  MainContainer,
  VideoPlayer,
  VideoContainer,
  VideoTitle,
  CountLikeContainer,
  CountContainer,
  CountText,
  LikesContainer,
  IconItem,
  SavedIcon,
  Line,
  ChannelContainer,
  ChannelImg,
  ChannelName,
  ChannelInfo,
  ChannelText,
  FailureContainer,
  FailureImg,
  FailureTitle,
  FailureText,
  RetryBtn,
  ChannelDesc,
} from './styledComponent'

class VideoElement extends Component {
  state = {
    videoInfo: {},
    apiStatus: 'LOADING',
    isPlaying: true,
    isAdded: false,
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getAPiDetails()
  }

  getAPiDetails = async () => {
    this.setState({apiStatus: 'LOADING'})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const requestUrl = await fetch(apiUrl, options)
    if (requestUrl.ok) {
      const requestData = await requestUrl.json()

      const videoDetails = requestData.video_details
      const updatedData = {
        id: videoDetails.id,
        description: videoDetails.description,
        videoUrl: videoDetails.video_url,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        viewCount: videoDetails.view_count,
      }
      this.setState({videoInfo: updatedData, apiStatus: 'SUCCESS'})
    } else {
      this.setState({apiStatus: 'FAILURE'})
    }
  }

  onClickPlay = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  renderLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="70px" width="150px" />
    </div>
  )

  renderRetry = () => {
    this.getAPiDetails()
  }

  renderFailure = isDark => (
    <FailureContainer>
      <FailureImg
        src={
          isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <FailureTitle isDark={isDark}>Oops! Something Went Wrong</FailureTitle>
      <FailureText isDark={isDark}>
        We are having some trouble to complete your request. Please try again.
      </FailureText>
      <FailureText isDark={isDark}>Please try it again.</FailureText>
      <RetryBtn onClick={this.renderRetry}>Retry</RetryBtn>
    </FailureContainer>
  )

  renderVideoPlayer = value => {
    const {videoInfo, isPlaying, isAdded, isDisLiked, isLiked} = this.state
    console.log(isAdded)
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      channel,
      description,
      id,
    } = videoInfo
    const {profileImageUrl, name, subscriberCount} = channel

    const date = new Date(publishedAt)
    const formattedDate = format(date, 'yyyy, M, d')
    const specificDate = new Date(formattedDate)
    const difference = formatDistanceToNow(specificDate, {addSuffix: true})
    const modifiedDifference = difference.split(' ')[1]
    const publishedDiff = `${modifiedDifference} years ago`

    const {addVideos, deleteVideo, savedList, isDark} = value
    const isSaved = savedList.filter(each => each.id === id)
    console.log(isSaved, 'saved')
    const isPresent = isSaved.length === 1
    const toggleSavedVideo = () => {
      if (isPresent) {
        this.setState({isAdded: false}, deleteVideo(videoInfo))
      } else {
        this.setState({isAdded: true}, addVideos(videoInfo))
      }
    }

    const toggleLike = () => {
      this.setState(prevState => ({
        isLiked: !prevState.isLiked,
        isDisLiked: false,
      }))
    }

    const toggleDisLike = () => {
      this.setState(prevState => ({
        isDisLiked: !prevState.isDisLiked,
        isLiked: false,
      }))
    }

    return (
      <VideoContainer isDark={isDark}>
        <VideoPlayer onClick={this.onClickPlay}>
          <ReactPlayer
            className="react-player"
            url={videoUrl}
            isplaying={isPlaying.toString()}
            controls={isPlaying}
            width="100%"
            height="100%"
          />
        </VideoPlayer>
        <VideoTitle isDark={isDark}>{title}</VideoTitle>
        <CountLikeContainer isDark={isDark}>
          <CountContainer isDark={isDark}>
            <CountText isDark={isDark}>{viewCount} views</CountText>
            <BsDot />
            <CountText isDark={isDark}>{publishedDiff}</CountText>
          </CountContainer>
          <LikesContainer isDark={isDark}>
            <IconItem value={isLiked} isDark={isDark} onClick={toggleLike}>
              <AiOutlineLike />
              Like
            </IconItem>
            <IconItem
              isDark={isDark}
              value={isDisLiked}
              onClick={toggleDisLike}
            >
              <AiOutlineDislike />
              Dislike
            </IconItem>
            <SavedIcon
              isDark={isDark}
              onClick={toggleSavedVideo}
              isAdded={isPresent}
            >
              <RiPlayListAddLine />
              Save
            </SavedIcon>
          </LikesContainer>
        </CountLikeContainer>
        <Line />
        <ChannelContainer>
          <ChannelImg src={profileImageUrl} alt="profile_image_ur" />
          <ChannelInfo>
            <ChannelName isDark={isDark}>{name}</ChannelName>
            <ChannelText isDark={isDark}>
              {subscriberCount} Subscribers
            </ChannelText>
            <ChannelDesc isDark={isDark}>{description}</ChannelDesc>
          </ChannelInfo>
        </ChannelContainer>
      </VideoContainer>
    )
  }

  render() {
    const {apiStatus} = this.state
    return (
      <SavedContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <MainContainer
              data-testid="videoItemDetails"
              apiStatus={apiStatus}
              isDark={isDark}
            >
              {apiStatus === 'LOADING' && this.renderLoading()}
              {apiStatus === 'FAILURE' && this.renderFailure(isDark)}
              {apiStatus === 'SUCCESS' && this.renderVideoPlayer(value)}
            </MainContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default VideoElement
