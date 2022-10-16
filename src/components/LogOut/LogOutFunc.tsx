import React, { useContext, useEffect } from 'react'
import { combineStorage } from '../../service/Storage'
import { AuthContextStore } from '../../store'

const LogOutFunc = () => {
  const { dispatch } = useContext(AuthContextStore)

  useEffect(() => {
    dispatch({
      type: 'LOGOUT',
    })
    combineStorage.remove('auth')
  }, [dispatch])

  return (
    <div />
  )
}

export default LogOutFunc
