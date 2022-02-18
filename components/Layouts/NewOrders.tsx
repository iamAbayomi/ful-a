import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import Title from '../Typography/Title'

type Props = {
  children?: ReactNode
  title?: string
}

const NewOrdersLayout = ({ children, title = 'This is the default title' }: Props) => (
  <div className='main'>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header>
        <Title text={'New Orders'} />
    </Header>
    {children}
    
  </div>
)

export default NewOrdersLayout

const Header = styled.div`

`