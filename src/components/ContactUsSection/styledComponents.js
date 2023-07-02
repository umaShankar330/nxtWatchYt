import styled from 'styled-components'

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 10px;
  @media screen and (max-width: 768px) {
    align-items: center;
  }

  margin: 0;
  margin-bottom: 15px;
  margin-right: 9px;
`
export const SectionTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDark ? 'white' : '#424242')};
`
export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ImageBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 50%;
  padding: 0;
  padding-right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageItem = styled.img`
  height: 30px;
  width: 30px;
  padding: 0;
`
export const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDark ? 'white' : '#424242')};
`
