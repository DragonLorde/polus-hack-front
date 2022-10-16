import { sideConfig } from '../../Sider/config'

export const getPageName = (currentPath: string): string => {
  const pathArray = Object.values(sideConfig).map((item) => item.config.items).flat()
  const path = pathArray.find((item: any) => item.link === currentPath)
  return path ? path.text : ''
}
