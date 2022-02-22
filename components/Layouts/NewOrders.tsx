import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import redflag from '../../assets/images/red-flag.svg'
import optionsMenu from '../../assets/images/options-menu.svg'
import styled from 'styled-components'
import Title from '../ui/Typography/Title'
import MulishFonts from '../ui/MulishFonts'


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
                <img
                    className='app-logo'
                    src='../../public/images/options-menu.svg'
                    // alt="Picture of the author"
                    // width="50"
                    // height="39"
                    // layout="responsive" 
                />
            </div>
            <div className='icon-container'>
                <img
                    className='app-logo'
                    src={optionsMenu}
                    // alt="Picture of the author"
                    // width="50"
                    // height="39"
                    // layout="responsive" 
                />
            </div>
        </div>
        <NotificationText className="highlight-text">22 New Orders </NotificationText>
    </Header>
    
    {children}
    
  </div>
)

export default NewOrdersLayout

const Header = styled.div`

`

const NotificationText = styled.p`
  margin: 10px;
  margin: 10px 20px 0px 20px;
`