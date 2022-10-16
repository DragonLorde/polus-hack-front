import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { LayoutContainer } from '../Layout'
import { AuthContextStore } from '../../store'

const RequireAuth = () => {
  const { state } = useContext(AuthContextStore)
  const { isAuth } = state

  const location = useLocation()

  return isAuth ? (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  )
}

export { RequireAuth }
