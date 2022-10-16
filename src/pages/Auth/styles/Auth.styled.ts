import styled from 'styled-components'

const AuthContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #F9F9F9;
  display: flex;
`

const AuthWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
`

const HumanLogo = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 569px;
  height: 557px;
`

const WaveImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const AuthLogo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 66px;
  gap: 8px;
`

const AuthFormWrapper = styled.div`

`

const AuthSupport = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Styled = {
  AuthContainer,
  AuthFormWrapper,
  AuthLogo,
  AuthSupport,
  AuthWrapper,
  HumanLogo,
  WaveImg,
}
