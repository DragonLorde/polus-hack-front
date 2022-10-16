import { useContext, useEffect } from 'react'
import { FormSignIn } from '@frontend-packages/russw-ui-kit'
import { useNavigate } from 'react-router-dom'
import { BackgroundTemplate } from '../../components/BackgroundTemplate'
import { MiddleWare } from '../../service/MiddleWare'
import { AuthContextStore } from '../../store'
import { AuthMiddleWare } from '../../service/MiddleWare/model/MiddleWare.model'

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
    <BackgroundTemplate>
      <FormSignIn linkForgotPassword="#href" onSubmit={onSubmit} />
    </BackgroundTemplate>
  )
}

export default AuthPage
