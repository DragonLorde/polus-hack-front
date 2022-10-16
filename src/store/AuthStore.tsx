import React, {
  createContext, FC, PropsWithChildren, useMemo, useReducer,
} from 'react'
import reducer from './reducer'
import { combineStorage } from '../service/Storage'

const initialValues = {
  userData: {
    emailVerified: false,
    email: '',
    eosBackend: {
      roles: [' '],
    },
    familyName: '',
    givenName: '',
    name: '',
    preferredUsername: '',
  },
  accessToken: '',
  refreshToken: '',
  isLoading: false,
  isAuth: false,
  isCookie: false,
}

export const AuthContextStore = createContext<any>(initialValues)

const AuthStoreContext:FC<PropsWithChildren> = ({ children }) => {
  const values = combineStorage.get('auth')
  const [state, dispatch] = useReducer(reducer, values || initialValues)
  const contextValue = useMemo(() => ({
    state,
    dispatch,
  }), [state])
  return (
  // @ts-ignore нет времени типы делать, позже
    <AuthContextStore.Provider value={contextValue}>
      {children}
    </AuthContextStore.Provider>
  )
}

export default AuthStoreContext
