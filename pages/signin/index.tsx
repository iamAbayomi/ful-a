import Image from 'next/image'
import styled from 'styled-components'
import logo from '../../assets/images/sendme-primary-logo.svg'

const signin = () => (
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
                <p className="page-header">Reset Password</p>
                <InputField className="" type={"text"} placeholder="Create new passowrd" />
                <InputField className="" type={"text"} placeholder="Confirm new password" />
                <button className="red-button">Reset Password</button>
            </div>
        </div>
    </div>
)

export default signin

const InputPlaceHolder = styled.input`
    padding: 5px 0px 15px;
`

const InputField = styled.input`
    display: block;
    margin: 20px 0px 10px;
`