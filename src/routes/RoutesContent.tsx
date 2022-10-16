import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from '../components/RequireAuth'
import { routes, routesSecure } from './routesConfig'

const RoutesContent = () => (
  <Routes>
    <Route element={<RequireAuth />}>
      {routesSecure.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
    </Route>
    <Route>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
    </Route>
  </Routes>
)

export default RoutesContent
