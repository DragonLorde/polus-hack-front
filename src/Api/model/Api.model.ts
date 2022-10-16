export interface AuthModel {
  email: string
  password: string
}

export interface CreateOrganization {
  // logo: string
  contract_number: string
  license_number: string
  license_count: number
  city: string
  type: string
  name: string
  count_users: string
  // has_4th_grade: boolean
  // transfer_to_next_grade: boolean
  administration: {
    last_name: string
    first_name: string
    middle_name: string
    position: string
    phone: string
    email: string
  }
}

export interface AssignLicense {
  organization_id: string
  class_id: string
  type: 'PERSON' | 'CLASS'
  subject_id: string | null
  book_id: string
  email: string | null
}

export interface NewUserModel {
  invite_id: string
  password: string
}

export interface CreateClass {
  organization_id: string
  class_number: string
  class_letter: string
  students?: string[]
  classroom_teacher?: {
    email: string
    last_name: string
    first_name: string
    middle_name: string
    position: string
  }
}
