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
import closeButton from '../../assets/images/close-button.svg'

import styled from 'styled-components'
import Title from '../ui/Typography/Title'
import MulishFonts from '../ui/MulishFonts'
import Bag from '../icons/Bag'
import Package from '../icons/Package'
import Bicycle from '../icons/Bicycle'
import Dashboard from '../icons/Dashboard'
import { useRouter } from 'next/router'
import BottomNavBar from '../ui/BottomNavBar'
import KebabMenuDropdown from '../ui/KebabMenuDropdown'
import { useAppDispatch } from '../../redux/hook'
import { toggleNewOrdersCheckbox } from '../../redux/reducers/NewOrderSlice'
import CheckboxSelectedComponent from '../ui/CheckboxSelectedComponent'
import eventBus from '../../utils/eventBus'


type Props = {
  children?: ReactNode
  title?: string,
  onClickMethod?: () => void
}

const NewOrdersLayout = ({ children, title = 'This is the default title' }: Props) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    

    return(
        <div className='main dashboard'>
            <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            
            </Head>
            <MulishFonts />
            <Header>
                <div className='display-flex'>
                    <Title text={'New Orders'} />
                    
                </div>
                <CheckboxSelectedComponent />
            </Header>
            {/* <NotificationText className="highlight-text">22 New Orders </NotificationText> */}
            <div className='dashboard-contents'>
                {children}
            </div>
            <BottomNavBar />
        </div>
        )
}

export default NewOrdersLayout

const Header = styled.div`
    padding: 0px 20px 20px 20px;
    box-sizing: border-box;
    position: fixed;
    top: 0%;
    width: 100%;
    max-width: 380px;
    background: #f6f5f5;
    z-index:10;
`

const NotificationText = styled.p`
    padding: 10px 30px 0px;
`

const NotificationOrderText = styled.p`
    margin: 10px 20px 10px 20px;
`


const HeaderSection = styled.div`
    margin: 10px 30px 0px 30px;
`

const RedButton = styled.div`
    background: #FF1B03;
    border-radius: 5px;
    max-width: max-content;
    font-family: 'Mulish';
    color: white;
    padding: 10px;
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 19px;
`