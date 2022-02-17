 
 
 const verification = () => {
     return (
         <div>
            <div className='main'>
                <img src="/sendme-primary-logo.svg" />
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