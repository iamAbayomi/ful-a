import navArrow from '../../assets/images/nav-arrow.svg'
import redBag from '../../assets/images/red-bag.svg'
//import  from '../../icons/Bag'
import menuOptions from '../../assets/images/options-menu.svg'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import KebabMenuDropdownVert from '../../components/ui/KebabMenuDropdownVert'
import { useRef, useState } from 'react'
import Modals from '../../components/ui/Modals'
import VerifyPackage from '../../components/ui/VerifyPackage'
import { Modal, ModalOverlay, ModalContent, ModalBody, useDisclosure } from '@chakra-ui/react'
import ModalLayout from '../../components/Layouts/ModalLayout'
import OrderDescription from '../../components/ui/OrderDescription'
import ConfirmBatch from '../../components/ui/ConfirmBatch'

const BatchedOrderDetails = () => {
    const router = useRouter()
    const modalRef = useRef(null)
    const {isOpen, onOpen, onClose } = useDisclosure()
    const [verifyPackageStep, setVerifyPackageStep] = useState<any>(1)


    function moveBack(){
        router.back()
    }

    return(
        <Container className='main'>
            <BackArrow onClick={moveBack} src={navArrow.src} />
            <div className='batched-order-container'>
                <BatchOrderSection className='display-flex'>
                    <img src={redBag.src}/>
                    <BatchOrderTitle className=''>
                        <PageTitle className='page-title'>Batch 3</PageTitle>
                        <BatchOrderDiv className='display-flex'>
                        <OrderHeading className='neworderheading'>Order 4</OrderHeading>
                            <p className='highlight-text'>#1289</p>
                        </BatchOrderDiv>
                    </BatchOrderTitle>
                </BatchOrderSection>
                <div className='details display-flex'>
                    <p className='body-normal-text'>DETIALS</p>
                    <KebabMenuDropdownVert menuItems={['Remove from batch', 'Cancel Order', 'Postpone order']} menuItemMethod={()=> {}} />
                </div>
                <table style={ { width: '100%' }}>
                    <tr>
                        <td className='small-text'>Name</td>
                        <td className='table-text' >Ajayi Bunmi</td>
                    </tr>
                    <tr>
                        <td className='small-text' >Address</td>
                        <td className='table-text' >No 26, Alaakia Road Bodija</td>
                    </tr>
                    <tr>
                        <td className='small-text' >Order Items</td>
                        <td>
                        <p className='table-text'>Boneless Beef</p>
                            <div className='display-flex-withoutspace'>
                                <p className='small-text' style={{ margin: '0px 0px 5px 0px' }}> 2pieces </p>
                                <p className='small-text' style={{ margin: '0px 0px 5px 10px' }}> 1kg</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td >
                            <p className='table-text'>Ponmo</p>
                            <div className='display-flex-withoutspace'>
                                <p className='small-text' style={{ margin: '0px 0px 5px 0px' }}> 2pieces </p>
                                <p className='small-text' style={{ margin: '0px 0px 5px 10px' }}> 1kg</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td >
                            <p className='table-text'>Beefy Meaty</p>
                            <div className='display-flex-withoutspace'>
                                <p className='small-text' style={{ margin: '0px 0px 5px 0px' }}> 2pieces </p>
                                <p className='small-text' style={{ margin: '0px 0px 5px 10px' }}> 1kg</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='small-text' >Total Price</td>
                        <td className='table-text'  >#10,000</td>
                    </tr>
                    <tr>
                        <td className='small-text' >Payment Status</td>
                        <td className='table-text' >Paid</td>
                    </tr>
                    <tr>
                        <td className='small-text' >Payment Mode</td>
                        <td className='table-text' >Cash</td>
                    </tr>
                    <tr>
                        <td className='small-text' >Rider</td>
                        <td className='body-text' >Adams Muhammed</td>
                    </tr>
                </table>
            </div>
            <div className='center-div'>
                <button onClick={onOpen} className='red-button'>Order Package</button>
            </div>
            
                <ModalLayout isOpen={isOpen} onClose={onClose} >
                    
                    {verifyPackageStep ==1 ? <VerifyPackage method={() => { setVerifyPackageStep(2)}} /> 
                     : verifyPackageStep == 2 ? <OrderDescription onClick={() => setVerifyPackageStep(3)} />
                     : verifyPackageStep == 3 ? <ConfirmBatch  onClose={onClose}  /> 
                     : <div />
                    }
                    
                </ModalLayout>
        </Container>
    )
}

export default BatchedOrderDetails


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
    margin: 0px 20px;
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