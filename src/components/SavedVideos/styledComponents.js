import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isDark ? 'black' : '#f1f5f9')};
  min-height: 90vh;
  flex-direction: column;
`
export const NoSavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? 'black' : '#f1f5f9')};
  height: 90vh;
`
export const NoSavedImg = styled.img`
  height: 400px;
  width: 500px;
`
export const NoSavedTitle = styled.h1`
  font-size: 19px;
  color: ${props => (props.isDark ? 'white' : '#383838')};
`
export const NoSavedText = styled.p`
  font-size: 14px;
  color: ${props => (props.isDark ? ' #94a3b8' : ' #606060')};
`
export const SavedListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
