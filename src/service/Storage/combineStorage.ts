import { sessionStorageService } from './sessionStorageService'
import { CookieService } from './cookieService'

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

export const combineStorage = {
  get: (key: string) => sessionStorageService.get(key) || CookieService.get(key) || initialValues,
  remove: (key: string) => {
    sessionStorageService.remove(key)
    CookieService.remove(key)
  },
}
