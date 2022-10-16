import { sideConfig } from '../config'

export const resolver = (role: string[]): any[] => {
  if (role.includes('ADMIN')) {
    return [
      sideConfig.educationalOrganization.config,
      sideConfig.users.config,
      sideConfig.licenses.config,
      sideConfig.class.config,
      sideConfig.settings.config,
    ]
  }
  return [
    sideConfig.educationalOrganization.config,
    sideConfig.users.config,
    sideConfig.licenses.config,
    sideConfig.settings.config,
  ]
}
