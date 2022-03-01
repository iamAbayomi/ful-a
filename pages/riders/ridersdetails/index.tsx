import navArrow from '../../../assets/images/nav-arrow.svg'
import redBag from '../../../assets/images/red-bag.svg'
//import  from '../../icons/Bag'
import menuOptions from '../../assets/images/options-menu.svg'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import KebabMenuDropdownVert from '../../../components/ui/KebabMenuDropdownVert'
import { useRef } from 'react'
import Modals from '../../../components/ui/Modals'
import VerifyPackage from '../../../components/ui/VerifyPackage'
import { Modal, ModalOverlay, ModalContent, ModalBody, useDisclosure } from '@chakra-ui/react'

const RiderDetails = () => {
    const router = useRouter()
    const modalRef = useRef(null)
    const {isOpen, onOpen, onClose } = useDisclosure()

    function verifypackage() {
        // router.push('/verifypackage')
        modalRef.current.classList.toggle('hide')
        
    }


    function moveBack(){
        router.push('/riders')
    }

    return(
        <Container className='main'>
            <BackArrow onClick={moveBack} src={navArrow.src} />
            <div className='batched-order-container'>
                <BatchOrderSection className='display-flex'>
                    <BatchOrderTitle className=''>
                        <PageTitle className='page-title'>Rider</PageTitle>
                    </BatchOrderTitle>
                </BatchOrderSection>
                <div className='details display-flex'>
                    <p className='body-normal-text'>DETAILS</p>
                    <KebabMenuDropdownVert menuItems={['Suspend Rider', 'Remove Rider', 'Update Rider\'s Details']} menuItemMethod={()=> {}} />
                </div>
                <table style={ { width: '100%' }}>
                    <tr>
                        <td className='small-text'>Name</td>
                        <td className='table-text' >Timi Daniels</td>
                    </tr>
                    <tr>
                        <td className='small-text' >ID</td>
                        <td className='table-text' >#R2456</td>
                    </tr>
                    <tr>
                        <td className='small-text' >Phone Number</td>
                        <td className='table-text'  >08102839483</td>
                    </tr>
                    <tr>
                        <td className='small-text' >Email Address</td>
                        <td className='table-text' >danielstimi@gmail.com</td>
                    </tr>
                    <tr>
                        <td className='small-text' >Current Status</td>
                        <td className='table-text' >Online</td>
                    </tr>
                </table>
            </div>
            <div className='center-div'>
                <button onClick={onOpen} className='red-button'>Order Package</button>
            </div>
            {/* <div ref={modalRef} className='hide'> */}
                <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalBody>
                            <VerifyPackage method={onClose}/>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            {/* </div> */}
        </Container>
    )
}

export default RiderDetails


const Container = styled.p`
    margin-top: 20px;
    padding: 0px 25px; 
`

const BatchOrderDiv = styled.div`
    max-width: max-content;
    margin: 0px;
`

const BatchOrderSection = styled.div`
    max-width: max-content;
    margin: 20px 0px;
`

const SmallText = styled.p`
    margin-right: 124px
`


const BatchOrderTitle = styled.div`
    margin: 0px 0px;
`


const PageTitle = styled.p`
    margin: 10px 0px 5px;
`


const OrderHeading = styled.p`
    margin-right: 20px;
`

const BackArrow = styled.img`
    margin: 0px -10px;
    width: 20px;
`