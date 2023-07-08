import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import TrendingVideoItem from '../TrendingVideoItem'
import {
  MainContainer,
  ItemList,
  TopContainer,
  IconContainer,
  IconText,
  FailureContainer,
  FailureImg,
  FailureTitle,
  FailureText,
  RetryBtn,
} from './styledComponents'
import SavedContext from '../../Context'

class Trending extends Component {
  state = {VideoList: [], apiStatus: 'LOADING'}

  componentDidMount() {
    this.setState({apiStatus: 'LOADING'}, this.getVideosApi)
  }

  getVideosApi = async () => {
    this.setState({apiStatus: 'LOADING'})
    const {VideoList} = this.state
    console.log(VideoList)
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const fetchDetails = await fetch(apiUrl, options)

    if (fetchDetails.ok) {
      const RequestData = await fetchDetails.json()
      const VideoDetails = RequestData.videos
      console.log(RequestData)
      const RequiredDetails = VideoDetails.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        publishedAt: each.published_at,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({VideoList: RequiredDetails, apiStatus: 'SUCCESS'})
    } else {
      this.setState({apiStatus: 'FAILURE'})
    }
  }

  renderRetry = () => {
    this.getVideosApi()
  }

  renderLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="70px" width="150px" />
    </div>
  )

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
      <RetryBtn onClick={this.renderRetry}>Retry</RetryBtn>
    </FailureContainer>
  )

  renderVideo = isDark => {
    const {VideoList} = this.state
    return (
      <>
        <TopContainer isDark={isDark}>
          <IconContainer isDark={isDark}>
            <HiFire />
          </IconContainer>
          <IconText isDark={isDark}>Trending</IconText>
        </TopContainer>
        <ItemList>
          {VideoList.map(each => (
            <TrendingVideoItem details={each} key={each.id} />
          ))}
        </ItemList>
      </>
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
              data-testid="trending"
              apiStatus={apiStatus}
              isDark={isDark}
            >
              {apiStatus === 'LOADING' && this.renderLoading()}
              {apiStatus === 'FAILURE' && this.renderFailure(isDark)}
              {apiStatus === 'SUCCESS' && this.renderVideo(isDark)}
            </MainContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default Trending
