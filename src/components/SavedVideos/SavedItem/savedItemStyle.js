import styled from 'styled-components'

export const MainContainer = styled.li`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  justify-content: flex-start;
  align-items: flex-start;
  font-family: 'Roboto';
  margin: 0;
  margin-bottom: 50px;
`
export const ImgElement = styled.img`
  //   height: 250px;
  width: 300px;
  object-fit: contain;
  object-position: top;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const VideoTitle = styled.p`
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
