import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'

type Props = {
  children?: ReactNode
  title?: string
}

const NewOrdersLayout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header>

    </Header>
    {children}
    
  </div>
)

export default NewOrdersLayout

const Header = styled.div`

`