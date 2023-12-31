import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f1f5f9')};
  height: 100%;
  min-height: 90vh;
  overflow-y: scroll;
  max-width: 100vw;
  width: 100%;
  flex-direction: column;
`
export const NoSavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f1f5f9')};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  height: 90vh;
`
export const NoSavedImg = styled.img`
  height: 400px;
  width: 500px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
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
export const SectionTitle = styled.h1`
  font-size: 27px;
  margin-left: 40px;
  color: ${props => (props.isDark ? 'white' : '#383838')};
`
