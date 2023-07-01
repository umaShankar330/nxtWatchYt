import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import {
  MainContainer,
  VideosContainer,
  SearchContainer,
  SearchItem,
  SearchBtn,
  FailureContainer,
  FailureImg,
  FailureTitle,
  FailureText,
  RetryBtn,
} from './styledComponents'
import HomeVideoItem from '../HomeVideoItem'

import SavedContext from '../../Context'

class Home extends Component {
  state = {
    searchInput: '',
    searchText: '',
    videosList: [],
    apiStatus: 'LOADING',
  }

  componentDidMount() {
    this.getAPiDetails()
  }

  getAPiDetails = async () => {
    this.setState({apiStatus: 'LOADING'})
    const {searchInput} = this.state
    console.log(searchInput)
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const fetchDetails = await fetch(apiUrl, options)
    console.log(fetchDetails)
    if (fetchDetails.ok) {
      const responseDetails = await fetchDetails.json()
      console.log(responseDetails.videos)
      const fetchVideos = responseDetails.videos
      const updatedVideos = fetchVideos.map(each => ({
        id: each.id,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      console.log(updatedVideos, 'new')

      this.setState({
        videosList: updatedVideos,
        apiStatus: 'SUCCESS',
      })
    } else {
      this.setState({apiStatus: 'FAILURE'})
    }
  }

  changeSearchText = event => {
    this.setState({searchText: event.target.value})
  }

  triggerSearch = () => {
    const {searchText} = this.state
    this.setState({searchInput: searchText}, this.getAPiDetails)
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
        We are having some trouble to complete your request.
      </FailureText>
      <FailureText isDark={isDark}>Please try it again.</FailureText>
      <RetryBtn onClick={this.renderRetry}>Retry</RetryBtn>
    </FailureContainer>
  )

  renderVideo = () => {
    const {videosList, searchText} = this.state
    return (
      <>
        <SearchContainer>
          <SearchItem
            placeholder="Search"
            onChange={this.changeSearchText}
            type="search"
            value={searchText}
          />
          <SearchBtn onClick={this.triggerSearch}>
            <AiOutlineSearch />
          </SearchBtn>
        </SearchContainer>
        {videosList.length === 0 ? null : (
          <VideosContainer>
            {videosList.map(eachItem => (
              <HomeVideoItem key={eachItem.id} details={eachItem} />
            ))}
          </VideosContainer>
        )}
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
            <MainContainer apiStatus={apiStatus} isDark={isDark}>
              {apiStatus === 'LOADING' && this.renderLoading()}
              {apiStatus === 'FAILURE' && this.renderFailure(isDark)}
              {apiStatus === 'SUCCESS' && this.renderVideo()}
            </MainContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default Home
