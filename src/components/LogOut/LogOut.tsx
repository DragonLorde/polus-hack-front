import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../routes/ROUTES'

const LogOut:FC = () => (
  <Link to={ROUTES.logout}>Выход</Link>
)

export default LogOut
