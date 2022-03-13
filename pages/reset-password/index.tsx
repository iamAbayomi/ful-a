import Image from 'next/image'
import styled from 'styled-components'
import logo from '../../assets/images/sendme-primary-logo.svg'
import Layout from '../../components/Layouts/AuthenticationLayout'

const resetpassowrd = () => (
    <Layout pageTitle={'Reset Password'} buttonTitle={'Reset Password'} nextPage={'/neworders'}>
        <InputField className="" type={"text"} placeholder="Create new passowrd" />
        <InputField className="" type={"text"} placeholder="Confirm new password" />
    </Layout>
)

export default resetpassowrd

const InputPlaceHolder = styled.input`
    padding: 5px 0px 15px;
`

const InputField = styled.input`
    display: block;
    margin: 20px 0px 10px;
`