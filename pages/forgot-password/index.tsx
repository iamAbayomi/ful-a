import Image from 'next/image'
import logo from '../../assets/images/sendme-primary-logo.svg'
import Layout from '../../components/Layouts/AuthenticationLayout'

const forgotPassword = () => {
    return (
        <Layout pageTitle={'Forgot Password'} buttonTitle={'Reset Password'} nextPage={'/reset-password'}>
            <p className="page-subtitle">Type your email address to send instructions 
                to reset your password to your inbox
            </p>
            <input className="input-field" type={"text"} placeholder="Enter Email" />
        </Layout>
    )
}

export default forgotPassword