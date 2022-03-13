import Image from 'next/image'
import { useRouter } from 'next/router'
import { type } from 'os'
import React, { ReactNode } from 'react'
import logo from '../../assets/images/sendme-primary-logo.svg'
import MulishFonts from '../ui/MulishFonts'

type props ={
    children?: ReactNode,
    pageTitle: string,
    buttonTitle: string,
    buttonOnClick?: () => void,
    nextPage: string
}

const Layout = ({ children, pageTitle, buttonTitle, buttonOnClick, nextPage }: props ) => {
    const router = useRouter()

    function  moveToSingup() {
        router.push(nextPage)
    }

    return (
        <div>
           <div className='main'>
             <div className='image-container'>
                   <MulishFonts />
                   <Image
                       className='app-logo'
                       src={logo}
                       alt="Picture of the author"
                       width="50"
                       height="39"
                       layout="responsive" 
                   />
               </div>
               <div className='sub-contents'>
                   <div className='header-text'>
                       <p className="page-header">{pageTitle}</p>
                       <div className='red-line' />
                   </div>
                   {children}
                   <div className='center-div'>
                        <button className="red-button" onClick={moveToSingup}>{buttonTitle}</button>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Layout