import Image from 'next/image'
import styled from 'styled-components'
import logo from '../../assets/images/sendme-primary-logo.svg'
import Layout from '../../components/Layouts/AuthenticationLayout'
import Primary from '../../components/ui/InputField/Primary'
import Medium from '../../components/ui/Typography/Medium'
import Small from '../../components/ui/Typography/Small'

const signup = () => (
    <Layout pageTitle={'Sign Up'} buttonTitle={' Done & Confirm'} nextPage='/signin'  >
        <p className="page-subtitle">
            Confirm your details and create password
            </p>
        <Small text={'Full Name'} />
        <Medium text={'Oluwabunmi Akinjide'}/>
        <Small text={'Mobile Name'} />
        <Medium text={'08104859684'}/>
        <Small text={'Email Address'} />
        <Medium text={'TimiD@gmail.com'}/>
        
        <div>
            <Primary placeholder={'Create new password'} type={'password'} />
            <Primary placeholder={'Confirm new password'} type={'password'} />
        </div>
    </Layout>
)

export default signup

const InputPlaceHolder = styled.input`
    padding: 5px 0px 15px;
`

