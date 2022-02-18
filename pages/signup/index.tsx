import Image from 'next/image'
import styled from 'styled-components'
import logo from '../../assets/images/sendme-primary-logo.svg'
import Medium from '../../components/Typography/Medium'
import Small from '../../components/Typography/Small'

const signup = () => (
    <div>
        <div className='main'>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href={`https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,400;0,500;0,700;0,800;1,400;1,500&display=swap`} rel="stylesheet"/>
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
            <div className='sub-contents'>
                <p className="page-header">Sign Up</p>
                <p className="page-subtitle">
                    Confirm your details and create password
                    </p>
                <Small text={'Full Name'} />
                <Medium text={'Oluwabunmi Akinjide'}/>
                <Small text={'Mobile Name'} />
                <Medium text={'08104859684'}/>
                <Small text={'Email Address'} />
                <Medium text={'TimiD@gmail.com'}/>
                <button className="red-button">Reset Password</button>
            </div>
        </div>
    </div>
)

export default signup

const InputPlaceHolder = styled.input`
    padding: 5px 0px 15px;
`

const InputField = styled.input`
    display: block;
    margin: 20px 0px 10px;
`