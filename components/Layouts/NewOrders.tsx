import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import redflag from '../../assets/images/red-flag.svg'
import optionsMenu from '../../assets/images/options-menu.svg'
import styled from 'styled-components'
import Title from '../Typography/Title'
import MulishFonts from '../MulishFonts'


type Props = {
  children?: ReactNode
  title?: string
}

const NewOrdersLayout = ({ children, title = 'This is the default title' }: Props) => (
  <div className='main dashboard'>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      
    </Head>
    <MulishFonts />
    <Header>
        <Title text={'New Orders'} />
        <div className='display-flex'>
            <div className='icon-container'>
                <Image
                    className='app-logo'
                    src={redflag}
                    alt="Picture of the author"
                    width="50"
                    height="39"
                    layout="responsive" 
                />
            </div>
            <div className='icon-container'>
                <Image
                    className='app-logo'
                    src={optionsMenu}
                    alt="Picture of the author"
                    width="50"
                    height="39"
                    layout="responsive" 
                />
            </div>
        </div>
    </Header>
    {children}
    
  </div>
)

export default NewOrdersLayout

const Header = styled.div`

`