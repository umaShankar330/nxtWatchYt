import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  PageContainer,
  LoginCard,
  WebsiteLogo,
  FormContainer,
  LabelContainer,
  LabelText,
  InputText,
  LoginBtn,
  ShowPwdContainer,
  AlertMessage,
} from './styledComponents'
import SavedContext from '../../Context'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isPwd: false,
    isLogin: true,
  }

  triggerLogin = event => {
    event.preventDefault()
    const {username, password} = this.state
    if (username !== 'rahul' && password !== 'rahul@2021') {
      this.setState({isLogin: false})
    } else {
      this.getLoginDetails()
    }
  }

  getLoginDetails = async () => {
    this.setState({isLogin: true})
    const {username, password} = this.state

    const userDetails = {username, password}

    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const sendDetails = await fetch(apiUrl, options)
    console.log(sendDetails)
    if (sendDetails.ok) {
      const requestToken = await sendDetails.json()
      console.log(requestToken)
      Cookies.set('jwt_token', requestToken.jwt_token, {
        expires: 30,
        path: '/',
      })
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({isLogin: false})
    }
  }

  changeName = event => {
    this.setState({username: event.target.value})
  }

  changePwd = event => {
    this.setState({password: event.target.value})
  }

  toggleShowPwd = () => {
    this.setState(prevState => ({isPwd: !prevState.isPwd}))
  }

  render() {
    const {username, password, isLogin, isPwd} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    console.log(isLogin, password)
    return (
      <SavedContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <PageContainer>
              <LoginCard>
                <WebsiteLogo
                  isDark={isDark}
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
                <FormContainer onSubmit={this.triggerLogin}>
                  <LabelContainer>
                    <LabelText htmlFor="user-name">USERNAME</LabelText>
                    <InputText
                      onChange={this.changeName}
                      type="text"
                      placeholder="Username"
                      id="user-name"
                      value={username}
                    />
                  </LabelContainer>
                  <LabelContainer>
                    <LabelText htmlFor="user-pwd">PASSWORD</LabelText>
                    <InputText
                      onChange={this.changePwd}
                      type={isPwd ? 'text' : 'password'}
                      placeholder="Password"
                      id="user-pwd"
                      value={password}
                    />
                  </LabelContainer>
                  <ShowPwdContainer>
                    <input
                      id="showPwd"
                      type="checkbox"
                      onClick={this.toggleShowPwd}
                    />
                    <LabelText htmlFor="showPwd">Show Password</LabelText>
                  </ShowPwdContainer>
                  <LoginBtn type="submit">Login</LoginBtn>
                  {isLogin ? null : (
                    <AlertMessage>
                      *Username and Password didn&apos;t match
                    </AlertMessage>
                  )}
                </FormContainer>
              </LoginCard>
            </PageContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default Login
