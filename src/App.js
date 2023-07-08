import {Route, Redirect, Switch} from 'react-router-dom'
import {Component} from 'react'
import Navbar from './components/Navbar'
import ItemsSection from './components/ItemsSection'
import ContactUsSection from './components/ContactUsSection'
// import BuyPremiumSection from './components/BuyPremiumSection'
import Login from './components/Login'
import './App.css'
import VideoElement from './components/VideoElement'
import Gaming from './components/Gaming'
import Home from './components/Home'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import SavedContext from './Context'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import {
  AppContainer,
  MiddleCont,
  LeftContainer,
  HomeCont,
  Footer,
} from './styledComponents'
// Replace your code here
class App extends Component {
  state = {videosList: [], isDarkTheme: false}

  addVideos = videoItem => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      this.setState({videosList: [videoItem]})
    } else {
      this.setState(
        previousState => ({
          videosList: [...previousState.videosList, videoItem],
        }),
        console.log(videosList, 'app'),
      )
    }
  }

  deleteVideo = videoItem => {
    // console.log('triggered delete')
    const {videosList} = this.state
    const UpdatedList = videosList.filter(
      eachItem => eachItem.id !== videoItem.id,
    )
    this.setState({videosList: [...UpdatedList]})
  }

  toggleTheme = () => {
    this.setState(previousState => ({isDarkTheme: !previousState.isDarkTheme}))
  }

  render() {
    const {videosList, isDarkTheme} = this.state
    // console.log(videosList, 'app.js')
    return (
      <>
        <SavedContext.Provider
          value={{
            savedList: videosList,
            deleteVideo: this.deleteVideo,
            addVideos: this.addVideos,
            isDark: isDarkTheme,
            toggleTheme: this.toggleTheme,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <AppContainer>
              <Navbar />
              <MiddleCont>
                <LeftContainer isDarkTheme={isDarkTheme}>
                  <ItemsSection />
                  <ContactUsSection />
                </LeftContainer>
                <HomeCont>
                  <Switch>
                    <ProtectedRoute exact path="/" component={Home} />
                    <ProtectedRoute
                      exact
                      path="/trending"
                      component={Trending}
                    />
                    <ProtectedRoute exact path="/gaming" component={Gaming} />
                    <ProtectedRoute
                      exact
                      path="/saved-videos"
                      component={SavedVideos}
                    />
                    <ProtectedRoute
                      path="/videos/:id"
                      component={VideoElement}
                    />
                    <Route path="/not-found" component={NotFound} />
                    <Redirect to="not-found" />
                  </Switch>
                </HomeCont>
              </MiddleCont>
              <Footer>
                <ContactUsSection />
              </Footer>
            </AppContainer>
          </Switch>
        </SavedContext.Provider>
      </>
    )
  }
}

export default App
