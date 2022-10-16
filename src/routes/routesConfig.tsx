import { LogOutFunc } from '../components/LogOut'

import { ROUTES } from './ROUTES'
import { Auth } from '../pages/Auth'
import { NotFound } from '../pages/NotFound'
import { Welcome } from '../components/Welcome'
import { CarGo } from '../pages/CarGo'
import { CarGoList } from '../pages/CarGoList'
import { Order } from '../pages/Order'
import { MapContainer } from '../pages/Map'

export const routesSecure = [
  {
    path: ROUTES.default,
    component: <Welcome />,
  },
  {
    path: '/CarGoList',
    component: <CarGoList />,
  },
  {
    path: '/CarGo',
    component: <CarGo />,
  },
  {
    path: '/map',
    component: <MapContainer />,
  },
  {
    path: '/cargo_details',
    component: <Order />,
  },
  {
    path: ROUTES.logout,
    component: <LogOutFunc />,
  },
]

export const routes = [
  {
    path: ROUTES.auth,
    component: <Auth />,
  },
  {
    path: '/*',
    component: <NotFound />,
  },
]
