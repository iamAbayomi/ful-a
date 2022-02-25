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
  head?: any
  children?: ReactNode
  title?: string
}

const DashbordLayout = ({ children, title, head }: Props) => (
  <div className='main dashboard'>
    <Header>
        <Title text={title} />
        <div className='display-flex header-icon'>
            <div className='display-flex icon-container'>
                <img
                    className='red-flag-logo'
                    src={redflag.src}
                />
            </div>
        </div>
    </Header>

    <div className=' dashboard-contents'>
        {children}
    </div>
    <BottomNavBar />
  </div>
)

export default DashbordLayout


const Header = styled.div`
    display: flex;
    justify-content: space-between;
    // margin: 0px 20px 0px 20px;
    position: fixed;
    top: 0%;
    width: 100%;
    background: #f6f5f5;
`

const NotificationText = styled.p`
    padding: 10px 30px 0px;
`
