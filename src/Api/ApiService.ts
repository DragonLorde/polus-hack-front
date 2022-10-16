import $api, { internalAxios } from './http'
import {
  AuthModel, NewUserModel, CreateOrganization, AssignLicense, CreateClass,
} from './model/Api.model'
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
  Auth: (data: AuthModel) => internalAxios.post('/auth', data),
  Register: (data: NewUserModel) => internalAxios.post('/auth/register', data),
  InputSchema: async (schemaName: string) => {
    const response = await $api.get(`/forms/${schemaName}`, config())
    return response.data
  },
  AllUser: (organizationId: string, page = 0): any => $api.get(`/user?organization_id=${organizationId}&size=6&page=${page}&type=table`, config()),
  AddUser: (data: any): any => $api.post('/user/create', data, config()),
  searchUsers: (organizationId: string, value: string) => $api.get(`/user/search/${value}?organization_id=${organizationId}&size=6&page=0&type=table`, config()),

  classes: (organizationId: string, page = 0) => $api.get(`/classes?organization_id=${organizationId}&size=6&page=${page}&type=table`, config()),
  classesShort: (organizationId: string, page = 0) => $api.get(`/classes/short?organization_id=${organizationId}&size=60&page=${page}&type=table`, config()),
  searchByClasses: (organizationId: string, value: string) => $api.get(`/classes/search/${value}?organization_id=${organizationId}&size=6&page=0&type=table`, config()),
  createClass: (data: CreateClass) => $api.post('/classes', data, config()),

  licenses: (organizationId: string, page = 0) => $api.get(`/license/${organizationId}?size=6&page=${page}&type=table`, config()),
  searchByLicenses: (organizationId: string, value: string) => $api.get(`/license/search/${value}?organization_id=${organizationId}&size=6&page=${0}&type=table`, config()), // пока нету
  classLicenses: (organizationId: string, page = 0): any => $api.get(`/license/${organizationId}/classes?size=6&page=${page}&type=table`, config()),
  licensesByClass: (organizationId: string, page = 0) => $api.get(`/license/class/${organizationId}?size=6&page=${page}&type=table`, config()),
  assignLicense: (data: AssignLicense) => $api.post('/license', data, config()),

  organizations: (page = 0) => $api.get(`/organization?size=6&page=${page}&type=table`, config()),
  searchByOrganizations: (value: string) => $api.get(`/organization/search/${value}?size=6&page=${0}&type=table`, config()),
  createOrganization: (data: CreateOrganization) => $api.post('/organization', data, config()),

  library: (organizationId: string, page = 0) => $api.get(`/library?organization_id=${organizationId}&size=6&page=${page}&type=table`, config()),
  bookList: () => $api.get('/user/listAcademicSubject', config()),
  searchByLibrary: (organizationId: string, value: string) => $api.get(`/library/search/${value}?organization_id=${organizationId}&size=6&type=table`, config()),

}
