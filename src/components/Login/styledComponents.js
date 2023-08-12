import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 100vw;
  color: black;
`
export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 30px;
  width: 27%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  @media screen and (max-width: 568px) {
    width: 90%;
  }
  @media screen and(min-width:768px) and (max-width: 968px) {
    width: 75%;
  }
  @media screen and(min-width:968px) and (max-width: 1150px) {
    width: 40%;
  }
`
export const WebsiteLogo = styled.img`
  height: 50px;
  width: 150px;
  margin-bottom: 20px;
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  margin: 20px;
  margin-bottom: 10px;
`
export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 15px;
`
export const LabelText = styled.label`
  color: #7e858e;
  font-size: 12px;
  font-weight: 500;
`
export const InputText = styled.input`
  width: 100%;
  outline-style: none;
  margin-top: 8px;
  padding: 8px;
  @media screen and (max-width: 768px) {
    border: 1px solid #0900005c;
  }
`
export const ShowPwdContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`
export const ShowPwdText = styled.p`
  font-size: 15px;
  margin: 0px;
`

export const LoginBtn = styled.button`
  width: 100%;
  height: 35px;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  background-color: #3b82f6;
`
export const AlertMessage = styled.p`
  color: red;
  margin-bottom: 0px;
  margin-top: 2px;
  font-size: 14px;
`
