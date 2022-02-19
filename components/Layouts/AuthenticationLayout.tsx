import Image from 'next/image'
import { type } from 'os'
import React, { ReactNode } from 'react'
import logo from '../../assets/images/sendme-primary-logo.svg'

type props ={
    children?: ReactNode,
    pageTitle: string,
    buttonTitle: string,
    buttonOnClick: () => void,
}

const verification = ({ children, pageTitle, buttonTitle, buttonOnClick }: props ) => {
    return (
        <div>
           <div className='main'>
             <div className='image-container'>
                   <link rel="preconnect" href="https://fonts.googleapis.com" />
                   <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                   <link href={`https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,400;0,500;0,700;1,400;1,500&display=swap`} rel="stylesheet" />

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
                   <button className="red-button" onClick={buttonOnClick}>{buttonTitle}</button>
               </div>
           </div>
        </div>
    )
}

export default verification