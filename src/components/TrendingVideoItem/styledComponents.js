import styled from 'styled-components'

export const MainContainer = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: 'Roboto';
  margin: 0;
  margin-bottom: 50px;
  @media screen and (max-width: 580px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0;
    width: 90vw;
  }
`
export const VideoImg = styled.img`
  width: 420px;
  @media screen and (max-width: 580px) {
    width: 90vw;
  }
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
  color: ${props => (props.isDark ? 'white' : '#383838')};
  @media screen and (max-width: 580px) {
    font-size: 15px;
  }
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
