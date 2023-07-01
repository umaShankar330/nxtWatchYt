import styled from 'styled-components'

export const MainContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
  font-family: 'Roboto';
  margin: 0;
  margin-right: 25px;
  margin-bottom: 50px;
`
export const VideoImg = styled.img`
  width: 250px;
`
export const VideoTitle = styled.p`
  margin: 0;
  padding: 0;
  margin-top: 10px;
  color: ${props => (props.isDark ? 'white' : '#383838')};
`

export const VideoText = styled.p`
  margin: 0;
  padding: 0;
  margin-top: 10px;
  color: ${props => (props.isDark ? ' #94a3b8' : ' #606060')};
`
