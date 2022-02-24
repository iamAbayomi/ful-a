import styled from "styled-components"
import bag from "../../../assets/images/bag.svg"

const Modal = () => {
    return (
        <div className="main">
            <img src={bag.src} /> 
            <BatchOrderDiv className='display-flex'>
                    <p>Order 4</p>
                    <p>#1289</p>
            </BatchOrderDiv>   
            <div className="order-items-section">
                <div className="display-flex">
                    <p>ORDER ITEMS</p>
                    <div className="Badge"> Package Verified</div>
                </div>
                <div className="display-flex">
                    <p>Baneless beef</p>
                    <p>2 pieces</p>
                    <p>2kg</p>
                </div>
                <div className="display-flex">
                    <p>Ponmo</p>
                    <p>2 pieces</p>
                    <p>1skg</p>
                </div>
                <div className="display-flex">
                    <p>Beefy Meaty</p>
                    <p>2 pieces</p>
                    <p>2kg</p>
                </div>
            </div>
            <div>
                <p>Print Package list</p>
                <button className="red-button">Proceed to next order</button>
                <p>Back to batched orders</p>
            </div>
        </div>
        
        
    )
}


export default Modal


const BatchOrderDiv = styled.div`
    max-width: max-content;
`