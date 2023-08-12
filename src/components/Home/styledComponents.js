import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props =>
    props.apiStatus === 'LOADING' || props.apiStatus === 'FAILURE'
      ? 'center'
      : 'flex-start'};
  align-items: ${props =>
    props.apiStatus === 'LOADING' || props.apiStatus === 'FAILURE'
      ? 'center'
      : 'flex-start'};
  min-height: 90vh;
  padding: 20px;
  width: 100%;
  background-color: ${props => (props.isDark ? '#181818' : '#f1f5f9')};
`
export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  margin: 0;
  padding: 0;
  width: 100%;
`
export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 15px;
  width: 100%;
`

export const SearchItem = styled.input`
  outline: none;
  line-height: 1.8;
  @media screen and (min-width: 768px) {
    width: 25%;
  }
  border: 2px solid #909090;
  border-right: none;
  padding: 0px 10px;
`
export const SearchBtn = styled.button`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #909090;
  padding: 0px 15px;
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
