import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import redflag from '../../assets/images/red-flag.svg'
import optionsMenu from '../../assets/images/options-menu.svg'
import newOrderIcon from '../../assets/images/bag.svg'
import packageIcon from '../../assets/images/package.svg'
import bicycleIcon from '../../assets/images/bicycle.svg'
import dashboardIcon from '../../assets/images/dashboard.svg'

import styled from 'styled-components'
import Title from '../ui/Typography/Title'
import MulishFonts from '../ui/MulishFonts'
import Bag from '../icons/Bag'


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
        <div className='display-flex header-icon'>
            <div className='display-flex icon-container'>
                <img
                    className='red-flag-logo'
                    src={redflag.src}
                />
            </div>
            <div className='icon-container'>
                <img
                    className='app-logo'
                    src={optionsMenu.src}
                />
            </div>
        </div>
    </Header>
    <NotificationText className="highlight-text">22 New Orders </NotificationText>
    {children}
    <div className='bottom-navbar'>
        {/* <img className='bottom-navbar-icon' src={newOrderIcon.src} /> */}
        <Bag />
        <img className='bottom-navbar-icon' src={packageIcon.src} />
        <img className='bottom-navbar-icon' src={bicycleIcon.src} />
        <img className='bottom-navbar-icon' src={dashboardIcon.src} />

    </div>
  </div>
)

export default NewOrdersLayout

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 20px 0px 20px;
`

const NotificationText = styled.p`
    padding: 10px 30px 0px;
`