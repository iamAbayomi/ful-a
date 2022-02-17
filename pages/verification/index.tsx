 import Image from 'next/image'
 import logo from './sendme-primary-logo.svg'
 
 const verification = () => {
     return (
         <div>
            <div className='main'>
              <div className='image-container'>
                    <Image
                        className='app-logo'
                        src={logo}
                        alt="Picture of the author"
                        width="50"
                        height="39"
                        layout="responsive" 
                    />
                </div>
                <p className="page-header">Verification</p>
                <p className="page-subtitle">Enter verifcation code sent to you by the 
                    fulfillment center agent</p>

                <input className="input-field" type={"input"} name="Enter Code" />
                <button className="red-button">Verify Code</button>
            </div>
         </div>
     )
 }

 export default verification