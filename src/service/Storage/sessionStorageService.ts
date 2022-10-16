export const sessionStorageService = {
  set: (key: string, item: any) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(key, JSON.stringify(item))
    }
  },
  get: (key: string) => {
    const item = sessionStorage.getItem(key)
    return item ? JSON.parse(item) : false
  },
  remove: (key: string) => {
    sessionStorage.removeItem(key)
  },
}
