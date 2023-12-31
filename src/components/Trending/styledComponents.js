import styled from 'styled-components'

// export const MainContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   font-family: 'Roboto';
//   align-items: flex-start;
//   background-color: ${props => (props.isDark ? '#000000' : '#f1f1f1')};
//   width: 100%;
// `
export const MainContainer = styled.div`
  display: flex;
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
  width: 84vw;
  @media screen and (max-width: 580px) {
    width: 100vw;
    padding: 0px;
  }
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f1f5f9')};
`

export const ItemList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  margin-top: 40px;

  @media screen and (max-width: 580px) {
    justify-content: center;
    padding: 0px;
    margin-top: 20px;
  }
`
export const TopContainer = styled.div`
  display: flex;

  padding: 30px 50px;
  width: 100%;
  background-color: ${props => (props.isDark ? '#181818' : '#ebebeb')};
  @media screen and (max-width: 580px) {
    padding: 10px 23px;
  }
`
export const IconContainer = styled.div`
  padding: 10px 15px;
  font-size: 40px;
  color: red;
  display: flex;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => (props.isDark ? '#000000' : '#bedbf7')};
  @media screen and (max-width: 580px) {
    font-size: 30px;
    padding: 8px 12px;
  }
`
export const IconText = styled.h1`
  margin-left: 15px;
  color: ${props => (props.isDark ? 'white' : '#000000')};
  @media screen and (max-width: 580px) {
    font-size: 20px;
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
export const Footer = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
