import {
  Achievement, Settings, School, Community, TeacherBlackboard,
} from '@frontend-packages/russw-icon-kit'
import { ROUTES } from '../../../routes/ROUTES'

export const sideConfig = {
  educationalOrganization: {
    role: ['ADMIN', 'LIBRARIAN'],
    config: {
      icon: <School />,
      title: 'Образовательная организация',
      items: [
        {
          link: ROUTES.addOrganization,
          text: 'Добавление образовательной организации',
        },
        {
          link: ROUTES.listOrganization,
          text: 'Список образовательных организаций',
        },
        {
          link: '/u',
          text: 'Библиотечный фонд',
        },
        {
          link: '/t4',
          text: 'Аналитика',
        },
        {
          link: '/t7',
          text: 'Документы',
        },
      ],
    },
  },
  users: {
    role: ['ADMIN', 'LIBRARIAN'],
    config: {
      icon: <Community />,
      title: 'Пользователи',
      items: [
        {
          link: ROUTES.addUser,
          text: 'Добавление пользователей',
        },
        {
          link: ROUTES.userList,
          text: 'Список пользователей',
        },
        {
          link: '/tg',
          text: 'Заблокированные пользователи',
        },
      ],
    },
  },
  licenses: {
    role: ['ADMIN', 'LIBRARIAN'],
    config: {
      icon: <Achievement />,
      title: 'Лицензии',
      items: [
        {
          link: ROUTES.workingWithLicenses,
          text: 'Работа с лицензией',
        },
        {
          link: ROUTES.listLicenses,
          text: 'Список лицензий',
        },
      ],
    },
  },
  class: {
    role: ['ADMIN'],
    config: {
      icon: <TeacherBlackboard />,
      title: 'Классы',
      items: [
        {
          link: ROUTES.addClass,
          text: 'Добавление класса',
        },
        {
          link: ROUTES.listClasses,
          text: 'Список классов',
        },
      ],
    },
  },
  settings: {
    role: ['ADMIN', 'LIBRARIAN'],
    config: {
      icon: <Settings />,
      title: 'Разное',
      items: [
        {
          link: '/xm',
          text: 'Настройки',
        },
        {
          link: '/tmdfg',
          text: 'Справка',
        },
        {
          link: '/fdgkj',
          text: 'Персональные предложения',
        },
      ],
    },
  },
}
