import React, { FC, useContext, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { resolver } from './resolver/resolver'
import { AuthContextStore } from '../../store'

const SiderContainer:FC = () => {
  const { state } = useContext(AuthContextStore)
  // const { userData: { eosBackend } } = state
  //
  // const { pathname } = useLocation()
  // const itemsMenu = resolver(eosBackend.roles)
  // const content = useMemo(() => (
  //   <SiderMenu currentPath={pathname} itemsMenu={itemsMenu} />
  // ), [itemsMenu, pathname])
  //
  // return (
  //   <SideMenuContainer>
  //     {content}
  //   </SideMenuContainer>
  // )
  return (<div></div>)
}

export default SiderContainer
