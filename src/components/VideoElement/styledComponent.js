import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  padding: 20px 30px;

  flex-direction: column;
  //   align-items: center;
  justify-content: ${props =>
    props.apiStatus === 'LOADING' || props.apiStatus === 'FAILURE'
      ? 'center'
      : 'flex-start'};
  align-items: ${props =>
    props.apiStatus === 'LOADING' || props.apiStatus === 'FAILURE'
      ? 'center'
      : 'flex-start'};
  min-height: 90vh;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f1f5f9')};
`
export const VideoPlayer = styled.div`
  display: flex;
  width: 70vw;
`
export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoTitle = styled.p`
  font-size: 15px;
  color: ${props => (props.isDark ? 'white' : '#383838')};
`
export const CountLikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => (props.isDark ? ' #94a3b8' : ' #606060')};
`
export const CountContainer = styled.div`
  display: flex;
  align-items: center;
`
export const CountText = styled.p`
  font-size: 14px;
  margin: 0;
  margin-right: 10px;
  margin-left: 10px;
  color: ${props => (props.isDark ? ' #94a3b8' : ' #606060')};
`
export const LikesContainer = styled.div`
  display: flex;
`
export const IconItem = styled.button`
  margin-right: 10px;
  font-size: 18px;
  background-color: none;
  outline: none;
  border: none;
`
export const SavedIcon = styled.p`
  margin-right: 10px;
  font-size: 18px;
  color: ${props => (props.isAdded ? 'blue' : null)};
`

export const Line = styled.hr`
  color: black;
  border-bottom: 1px solid black;
  width: 100%;
`
export const ChannelContainer = styled.div`
  display: flex;
`
export const ChannelImg = styled.img`
  height: 35px;
`
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-size: 16px;
  color: ${props => (props.isDark ? ' #94a3b8' : ' #606060')};
`
export const ChannelText = styled.p`
  font-size: 15px;
  margin-right: 10px;
  color: ${props => (props.isDark ? ' #94a3b8' : ' #606060')};
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
