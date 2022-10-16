import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {FormSignIn, Logo, Typography} from '@dragonlorde/sapfiron-ui-kit'
import { MiddleWare } from '../../service/MiddleWare'
import { AuthContextStore } from '../../store'
import { AuthMiddleWare } from '../../service/MiddleWare/model/MiddleWare.model'
import { Styled } from './styles/Auth.styled'
import Wave from '../../assets/svg/Wave/Wave.svg'
import Human from '../../assets/svg/Human/Human.svg'

const {
  AuthWrapper,
  AuthFormWrapper,
  AuthLogo,
  AuthSupport,
  AuthContainer,
  HumanLogo,
  WaveImg,
} = Styled

const AuthPage = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useContext(AuthContextStore)
  const { isAuth } = state
  useEffect(() => {
    if (isAuth) {
      navigate('/')
    }
  }, [isAuth, navigate])

  const onSubmit = async (data: AuthMiddleWare) => {
    const response = await MiddleWare.authMiddleWare(data)
    if (response) {
      dispatch({
        type: 'AUTH',
        payload: {
          ...response,
        },
      })
    }
  }

  return (
    <AuthContainer>
      <AuthWrapper>
        <AuthLogo>
          <Logo width={65} height={73} />
          ПОЛЮС
        </AuthLogo>
        <AuthFormWrapper>
          <FormSignIn linkForgotPassword="#href" onSubmit={onSubmit} />
        </AuthFormWrapper>
        <AuthSupport>
          <Typography type="bold">
            +7-(458)-454-14-41
          </Typography>
          <Typography type="default">
            Тех поддрежка
          </Typography>
        </AuthSupport>
      </AuthWrapper>
      <AuthWrapper>
        <WaveImg src={Wave} alt="reactLogo" />
        <HumanLogo src={Human} alt="r" />
      </AuthWrapper>
    </AuthContainer>
  )
}

export default AuthPage
