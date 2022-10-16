
import { combineStorage } from '../service/Storage'

const config = () => {
  const { accessToken } = combineStorage.get('auth')

  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }
}

export const ApiService = {

}
