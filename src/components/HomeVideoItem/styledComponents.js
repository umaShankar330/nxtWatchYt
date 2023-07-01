import styled from 'styled-components'

export const MainContainer = styled.li`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  width: 270px;
  align-items: flex-start;
  margin-right: 20px;
  margin-bottom: 10px;
`
export const VideoBtn = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  outline: none;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: transparent;
`
export const VideoImage = styled.img`
  height: 165px;
  width: 270px;
`
export const ContentContainer = styled.div`
  display: flex;
  padding: 10px;
`
export const ProfileImg = styled.img`
  height: 30px;
  width: 30px;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10px;
`
export const VideoTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  margin: 0;
  margin-bottom: 10px;
  align-self: flex-start;
  text-align: start;
  color: ${props => (props.isDark ? 'white' : '#383838')};
`
export const ChannelName = styled.p`
  font-size: 14px;
  margin: 0;
  color: ${props => (props.isDark ? ' #94a3b8' : ' #606060')};
`

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  color: ${props => (props.isDark ? ' #94a3b8' : ' #606060')};
`
