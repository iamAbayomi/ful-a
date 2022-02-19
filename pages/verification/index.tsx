 import Image from 'next/image'
import { useRouter } from 'next/router'
 import Layout from '../../components/Layouts/AuthenticationLayout'

 const verification = () => {
     const router = useRouter()
     
     function moveToSignUp(){
         router.push('/signup')
     }

     return (
         <Layout pageTitle={'Verification'} buttonTitle={'Verify Code'} buttonOnClick={moveToSignUp}  >
            <p className="page-subtitle">Enter verifcation code sent to you by the 
                fulfillment center agent</p>
            <input className="input-field" type={"text"} placeholder="Enter Code" />
        </Layout>
     )
 }

 export default verification