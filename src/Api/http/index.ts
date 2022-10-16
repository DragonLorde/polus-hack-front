import axios from 'axios'
import { MiddleWare } from '../../service/MiddleWare'

export const APP_URL = 'https://test.russlo.ru/api/v1'

const axiosConfig = {
  withCredentials: true,
  baseURL: APP_URL,
}

const $api = axios.create(axiosConfig)
export const internalAxios = axios.create(axiosConfig)

$api.interceptors.request.use((config) => config)
$api.interceptors.response.use((config) => config, async (error) => {
  const originalRequest = error.config
  if (error.response.status === 401 && !originalRequest?.sent) {
    await MiddleWare.refreshToken(originalRequest)
  } else if (error.response.status === 500) {
    throw new Error(error)
  } else if (error.response.status === 404) {
    throw new Error(error)
  }
  return { error: error.response, data: error.response.data }
})

export default $api
