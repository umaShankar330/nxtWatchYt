import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: 'Roboto';
  margin: 0;
  margin-bottom: 50px;
`
export const ImgElement = styled.img`
  height: 250px;
  width: 350px;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const VideoTitle = styled.h1`
  font-size: 19px;
  margin-left: 10px;
  margin-top: 6px;
  margin-bottom: 0px;
  color: ${props => (props.isDark ? 'white' : '#383838')};
`
export const ChannelName = styled.p`
  margin: 0;
  padding: 0;
  margin: 10px;
  color: ${props => (props.isDark ? ' #94a3b8' : ' #606060')};
`

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.isDark ? ' #94a3b8' : ' #606060')};
`
export const CountText = styled.p`
  margin: 0;
  margin-left: 10px;
  color: ${props => (props.isDark ? ' #94a3b8' : ' #606060')};
`
