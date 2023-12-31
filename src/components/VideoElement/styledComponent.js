import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  padding: 20px 30px;
  flex-direction: column;
  justify-content: ${props =>
    props.apiStatus === 'LOADING' || props.apiStatus === 'FAILURE'
      ? 'center'
      : 'flex-start'};
  align-items: ${props =>
    props.apiStatus === 'LOADING' || props.apiStatus === 'FAILURE'
      ? 'center'
      : 'flex-start'};
  //   min-height: 90vh;
  width: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f1f5f9')};
`
export const VideoPlayer = styled.div`
  position: relative;
  padding-top: 56.25%;
  //   width: 100vw;
`
export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  //   @media screen and (max-width: 768px) {
  //     justify-content: flex-start;
  //     align-items: flex-start;
  //   }
`
export const VideoTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.isDark ? 'white' : '#383838')};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
export const CountLikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  color: ${props => (props.isDark ? ' #94a3b8' : ' #606060')}!important;
`
export const CountContainer = styled.div`
  display: flex;
  align-items: center;
`
export const CountText = styled.p`
  font-size: 14px;
  margin: 0;
  color: ${props => (props.isDark ? ' #94a3b8' : ' #606060')};
`
export const LikesContainer = styled.div`
  display: flex;
  align-items: center;
`
export const IconItem = styled.button`
  margin-right: 10px;
  font-size: 17px;
  display: flex;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: none;
  color: ${props => {
    if (props.value) {
      return 'blue'
    }
    return props.isDark ? ' #94a3b8' : ' #606060'
  }};
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

export const SavedIcon = styled.p`
  margin-right: 10px;
  font-size: 17px;
  //   color: ${props => (props.isAdded ? 'blue' : null)};
  color: ${props => {
    if (props.isAdded) {
      return 'blue'
    }
    return props.isDark ? ' #94a3b8' : ' #606060'
  }};
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

export const Line = styled.hr`
  color: black;
  border-bottom: 1px solid black;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 0;
`
export const ChannelContainer = styled.div`
  display: flex;
  gap: 15px;
`
export const ChannelImg = styled.img`
  height: 35px;
`
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ChannelName = styled.p`
  font-size: 16px;
  margin-top: 0;
  font-weight: 500;
  color: ${props => (props.isDark ? 'white' : '#383838')};
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const ChannelText = styled.p`
  font-size: 15px;
  margin-right: 10px;
  margin-top: 0;
  color: ${props => (props.isDark ? ' #94a3b8' : ' #606060')};
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
export const ChannelDesc = styled.p`
  font-size: 15px;
  margin-right: 10px;
  margin-top: 0;
  color: ${props => (props.isDark ? 'white' : '#383838')};
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImg = styled.img`
  max-height: 40vh;
`
export const FailureTitle = styled.h1`
  margin-bottom: 0;
  color: ${props => (props.isDark ? 'white' : '#383838')};
`

export const FailureText = styled.p`
  margin-bottom: 0;
  color: ${props => (props.isDark ? ' #94a3b8' : ' #606060')};
`
export const RetryBtn = styled.button`
  height: 33px;
  width: 80px;
  background-color: #4f46e5;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  margin-top: 10px;
`
