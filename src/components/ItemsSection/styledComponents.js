import styled from 'styled-components'

export const ItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 100vw;
    padding-left: 0;
  }
`
export const ItemsList = styled.li`
  display: flex;
  align-items: center;
  text-align: flex-start;
  justify-content: flex-start;
  width: 14vw;
  padding-left: 40px;
  background-color: ${props => {
    if (props.isActive) {
      if (props.isDark) {
        return '#313131'
      }
      return '#cbd5e1'
    }
    return 'transparent'
  }};

  @media screen and (max-width: 768px) {
    width: 100vw;
    padding-left: 0;
    text-align: center;
    justify-content: center;
    border-bottom: 1px solid #c1c2bc;
    background-color: ${props => (props.isDark ? ' #313131' : ' #cbd5e1')};
  }
  @media screen and (max-width: 968px) {
    padding-left: 5px;
  }
`
export const ItemText = styled.p`
  color: ${props => (props.isDark ? 'white' : '#424242')};
  margin-left: 10px;
  font-weight: 500;
`
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  color: ${props => {
    if (props.isActive) {
      return '#ff0000'
    }
    return props.isDark ? 'white' : '#424242'
  }};

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ItemBtn = styled.button`
  border: none;
  outline: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
`
