import styled from 'styled-components'

export const MainContainer = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: 'Roboto';
  margin: 0;
  margin-bottom: 50px;
`
export const VideoImg = styled.img`
  width: 420px;
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
  color: ${props => (props.isDark ? 'white' : '#383838')};
`
export const VideoText = styled.p`
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
