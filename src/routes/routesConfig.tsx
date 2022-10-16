import { Welcome } from '@frontend-packages/russw-ui-kit'

import { LogOutFunc } from '../components/LogOut'
import {
  AddOrganization,
  ListOrganization,
  WorkingWithLicenses,
  UserList,
  ListLicenses,
  Auth,
  NewUser,
  NotFound,
  ListClasses,
  AddClass,
} from '../pages'
import { AddUser } from '../pages/AddUser'
import { ROUTES } from './ROUTES'

export const routesSecure = [
  {
    path: ROUTES.default,
    component: <Welcome />,
  },
  {
    path: ROUTES.addOrganization,
    component: <AddOrganization />,
  },
  {
    path: ROUTES.listOrganization,
    component: <ListOrganization />,
  },
  {
    path: ROUTES.listLicenses,
    component: <ListLicenses />,
  },
  {
    path: ROUTES.workingWithLicenses,
    component: <WorkingWithLicenses />,
  },
  {
    path: ROUTES.userList,
    component: <UserList />,
  },
  {
    path: ROUTES.addUser,
    component: <AddUser />,
  },
  {
    path: ROUTES.listClasses,
    component: <ListClasses />,
  },
  {
    path: ROUTES.addClass,
    component: <AddClass />,
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
    path: ROUTES.newUserInviteId,
    component: <NewUser />,
  },
  {
    path: '/*',
    component: <NotFound />,
  },
]
