import {
  CarGo, Layout, ListOrder, Profile, Sider,
} from '@dragonlorde/sapfiron-ui-kit'
import React, { FC } from 'react'

const items: any = [
  {
    title: 'Список заявок',
    icon: <ListOrder width={20} height={20} />,
    link: '/carGoList',
  },
  {
    title: 'Создать заявку',
    icon: <CarGo width={20} height={20} />,
    link: '/carGo',
  },
  {
    title: 'Карта',
    icon: <Profile width={20} height={20} />,
    link: '/map',
  },
]

const LayoutSider:FC = () => (
  <Layout.Sider>
    <Sider items={items} />
  </Layout.Sider>
)

export default LayoutSider
