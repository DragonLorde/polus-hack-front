import { AuthMiddleWare } from './model/MiddleWare.model'
import { ApiService } from '../../Api'
import { sessionStorageService, CookieService, combineStorage } from '../Storage'
import { dataConvert } from './helpers'
import { NewUserModel } from '../../Api/model/Api.model'
import $api, { internalAxios } from '../../Api/http'
import { ROUTES } from '../../routes/ROUTES'

export const MiddleWare = {
  authMiddleWare: async (data: AuthMiddleWare) => {
    const { isRememberPassword, password, email } = data
    const response = await ApiService.Auth({ password, email })
    if (response) {
      const convertedData = dataConvert(response.data, isRememberPassword)
      if (isRememberPassword) {
        CookieService.set('auth', convertedData, response.data.expires_in)
      } else {
        sessionStorageService.set('auth', convertedData)
      }
      return response.data
    }
    return null
  },
  newUserMiddleWare: async (data: NewUserModel) => {
    const response = await ApiService.Register(data)
    return !!response
  },
  getBooksMiddleWare: async () => {
    const response = await ApiService.bookList()
    if (response) {
      return response
    }
    return null
  },
  refreshToken: async (originalRequest: any) => {
    const { refreshToken, isCookie } = combineStorage.get('auth')

    try {
      const response = await internalAxios.post(`/auth/refresh?refresh_token=${refreshToken}`)
      const convertedData = dataConvert(response.data, isCookie)
      if (isCookie) {
        CookieService.set('auth', convertedData, response.data.expires_in)
      } else {
        sessionStorageService.set('auth', convertedData)
      }
      return $api.request({ ...originalRequest, sent: true })
    } catch (e) {
      window.location.pathname = ROUTES.logout
    }

    return null
  },
}
