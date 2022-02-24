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
import Package from '../icons/Package'
import Bicycle from '../icons/Bicycle'
import Dashboard from '../icons/Dashboard'
import BottomNavBar from '../ui/BottomNavBar'


type Props = {
  children?: ReactNode
  title?: string
}

const DashbordLayout = ({ children, title = 'This is the default title' }: Props) => (
  <div className='main dashboard'>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      
    </Head>
    <MulishFonts />
    
    <div className='dashboard-contents'>
        {children}
    </div>
    <BottomNavBar />
  </div>
)

export default DashbordLayout

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 20px 0px 20px;
`

const NotificationText = styled.p`
    padding: 10px 30px 0px;
`
