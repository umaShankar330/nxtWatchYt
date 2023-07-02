import styled from 'styled-components'

export const AppContainer = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  margin: 0;
  padding: 0;
`
export const MiddleCont = styled.div`
  display: flex;
  height: 100%;
  min-height: 90vh;
  flex-direction: row;
  justify-content: space-between;
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 14vw;
  max-height: 90vh;
  background-color: ${props => (props.isDarkTheme ? '#212121' : 'transparent')};
`
//

export const HomeCont = styled.div`
  width: 86vw;
  max-height: 90vh;
  overflow-y: scroll;
`
