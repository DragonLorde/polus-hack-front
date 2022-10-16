import {
  Layout, Panel, Typography, PersonMenu,
} from '@dragonlorde/sapfiron-ui-kit'
import React, {
  FC, useContext, useEffect, useState,
} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AuthContextStore } from '../../../store'
import { LogOut } from '../../LogOut'
import { getPageName } from '../utils/getPageName'

const LayoutHeader:FC = () => {
  const { state: { userData } } = useContext(AuthContextStore)
  const [pageName, setPageName] = useState<string>('')
  const { pathname } = useLocation()

  useEffect(() => {
    const currentName:string = getPageName(pathname)
    setPageName(currentName)
  }, [pathname])

  const personData = {
    firstName: userData.givenName,
    lastName: userData.familyName,
    email: userData.preferredUsername,
  }
  const itemsMenu = [
    {
      componentLink: <Link to="/profile">Перейти в профиль</Link>,
    },
    {
      componentLink: <LogOut />,
    },
  ]
  getPageName('s')

  return (
    <Layout.Header>
      <Panel.Header>
        <Typography type="logo">
          {pageName}
        </Typography>
        <PersonMenu person={personData} itemsMenu={itemsMenu} />
      </Panel.Header>
    </Layout.Header>
  )
}

export default LayoutHeader
