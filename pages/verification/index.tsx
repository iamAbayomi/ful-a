 import Image from 'next/image'

 import Layout from '../../components/Layouts/AuthenticationLayout'

 const verification = () => {
     return (
         <Layout pageTitle={'Verification'} buttonTitle={'Verify Code'} nextPage='/signup'  >
            <p className="page-subtitle">Enter verifcation code sent to you by the 
                fulfillment center agent</p>
            <input className="input-field" type={"text"} placeholder="Enter Code" />
        </Layout>
     )
 }

 export default verification