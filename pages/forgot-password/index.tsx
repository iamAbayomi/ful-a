import Image from 'next/image'
import logo from '../../assets/images/sendme-primary-logo.svg'

const forgotPassword = () => {
    return (
        <div>
           <div className='main'>
             <div className='image-container'>
             <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href={`https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,400;0,500;0,700;0,800;1,400;1,500&display=swap`} rel="stylesheet"/>
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
                   <p className="page-header">Forgot Password</p>
                   <p className="page-subtitle">Type your email address to send instructions 
                        to reset your password to your inbox
                    </p>

                   <input className="input-field" type={"text"} placeholder="Enter Email" />
                   <button className="red-button">Reset Password</button>
               </div>
           </div>
        </div>
    )
}

export default forgotPassword