import navArrow from '../../assets/images/nav-arrow.svg'
import redBag from '../../assets/images/red-bag.svg'
//import  from '../../icons/Bag'
import menuOptions from '../../assets/images/options-menu.svg'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const BatchedOrderDetails = () => {

    const router = useRouter()

    function verifypackage() {
        router.push('/verifypackage')
    }

    return(
        <Container className='main'>
            <img src={navArrow.src} />
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
                    <img src={menuOptions.src}/>
                </div>
                <div className='display-flex-withoutspace'>
                    <SmallText className='small-text'>Name</SmallText>
                    <p className='medium-text'>Ajayi Bunmi</p>
                </div>
                <div className='display-flex-withoutspace'>
                    <SmallText className='small-text'>Address</SmallText>
                    <p className='medium-text'>No 26, Alaakia Road Bodija</p>
                </div>
                <div className='display-flex-withoutspace'>
                    <SmallText className='small-text'>Order Items</SmallText>
                    <div className='order-items'>
                        <div>
                            <p className='medium-text'>Boneless beef</p>
                            <div className='display-flex'>
                                <p className='small-text'> 2pieces </p>
                                <p className='small-text'> 2kg</p>
                            </div>
                        </div>
                        <div>
                            <p className='medium-text'>Ponmo</p>
                            <div className='display-flex'>
                                <p className='small-text'> 2pieces </p>
                                <p className='small-text'> 1kg</p>
                            </div>
                        </div>
                        <div>
                            <p className='medium-text'>Beefy Meaty</p>
                            <div className='display-flex'>
                                <p className='small-text'> 2pieces </p>
                                <p className='small-text'> 2kg</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='display-flex-withoutspace'>
                    <SmallText className='small-text'>Total Price</SmallText>
                    <p className='medium-text'>#10,000</p>
                </div>
                <div className='display-flex-withoutspace'>
                    <SmallText className='small-text'>Payment Status</SmallText>
                    <p className='medium-text'>Paid</p>
                </div>
                <div className='display-flex-withoutspace'>
                    <SmallText className='small-text' >Payment Mode</SmallText>
                    <p className='medium-text'>Cash</p>
                </div>
                <div className='display-flex-withoutspace'>
                    <SmallText className='small-text'>Rider</SmallText>
                    <p className='body-text'>Adams Muhammed</p>
                </div>
            </div>
            <div className='center-div'>
                <button onClick={verifypackage} className='red-button'>Order Package</button>
            </div>
        </Container>
    )
}

export default BatchedOrderDetails


const Container = styled.p`
    margin-top: 20px;
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
