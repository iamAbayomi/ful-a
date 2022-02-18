 import Image from 'next/image'
 import logo from './sendme-primary-logo.svg'
 
 const verification = () => {
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
                        <p className="page-header">Verification</p>
                        <div className='red-line' />
                    </div>
                    <p className="page-subtitle">Enter verifcation code sent to you by the 
                        fulfillment center agent</p>

                    <input className="input-field" type={"text"} placeholder="Enter Code" />
                    <button className="red-button">Verify Code</button>
                </div>
            </div>
         </div>
     )
 }

 export default verification