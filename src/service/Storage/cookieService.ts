import Cookies from 'js-cookie'

// TODO переписать на натив js

export const CookieService = {
  set: (name: string, data: any, date: number) => {
    Cookies.set('auth', JSON.stringify(data), { expires: date / 3600 })
  },
  get: (name: string) => {
    const item = Cookies.get(name)
    return item ? JSON.parse(item) : false
  },
  remove: (name: string) => Cookies.remove(name),
}
