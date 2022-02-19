import Image from 'next/image'
import styled from 'styled-components'
import logo from '../../assets/images/sendme-primary-logo.svg'
import Layout from '../../components/Layouts/AuthenticationLayout'

import Primary from '../../components/ui/InputField/Primary'

const signin = () => (
    <Layout pageTitle={'Log In'} buttonTitle={'Log In'} nextPage={'/forgot-password'}>
        <InputField className="" type={"text"} placeholder="Mobile Number" />
        <Primary  type={"password"} placeholder="Password" />
    </Layout>
)

export default signin

const InputPlaceHolder = styled.input`
    padding: 5px 0px 15px;
`

const InputField = styled.input`
    display: block;
    margin: 20px 0px 10px;
`