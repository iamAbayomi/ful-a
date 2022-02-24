import navArrow from '../../../assets/images/nav-arrow.svg'
import Bag from '../../icons/Bag'
//import  from '../../icons/Bag'
import menuOptions from '../../../assets/images/options-menu.svg'
import styled from 'styled-components'

const BatchedOrderDetails = () => {
    return(
        <div className='main'>
            <img src={navArrow.src} />
            <div className='batched-order-container'>
                <Bag />
                <p>Batch 3</p>
                <BatchOrderDiv className='display-flex'>
                    <p>Order 4</p>
                    <p>#1289</p>
                </BatchOrderDiv>
                <div className='details display-flex'>
                    <p>Details</p>
                    <img src={menuOptions.src}/>
                </div>
                <div className='display-flex'>
                    <p>Name</p>
                    <p>Ajayi Bunmi</p>
                </div>
                <div className='display-flex'>
                    <p>Address</p>
                    <p>No 26, Alaakia Road Bodija</p>
                </div>
                <div className='display-flex'>
                    <p>Order Items</p>
                    <div>
                        <p>Boneless beef</p>
                    </div>
                </div>
                <div className='display-flex'>
                    <p>Total Price</p>
                    <p>#10,000</p>
                </div>
                <div className='display-flex'>
                    <p>Payment Status</p>
                    <p>Paid</p>
                </div>
                <div className='display-flex'>
                    <p>Payment Mode</p>
                    <p>Cash</p>
                </div>
                <div className='display-flex'>
                    <p>Rider</p>
                    <p>Adams Muhammed</p>
                </div>
            </div>
            <button className='red-button'>Order Package</button>
        </div>
    )
}

export default BatchedOrderDetails


const BatchOrderDiv = styled.div`
    max-width: max-content;
`