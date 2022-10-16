import { Layout } from '@dragonlorde/sapfiron-ui-kit'
import React, { FC, PropsWithChildren, useMemo } from 'react'

import { LayoutHeader, LayoutSider } from './components'

const LayoutContainer:FC<PropsWithChildren> = ({ children }) => {
  const content = useMemo(() => (
    <Layout.Content>
      {children}
    </Layout.Content>
  ), [children])
  return (
    <Layout>
      <LayoutSider />
      <Layout>
        <LayoutHeader />
        <Layout>
          {content}
        </Layout>
      </Layout>
    </Layout>
  )
}

export default LayoutContainer
