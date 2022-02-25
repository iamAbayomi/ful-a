import styled from "styled-components"
import redBag from '../../../assets/images/red-bag.svg'

const OrderDescription = () => {
    return(
        <div className="main">
            <ImageContainer className="">
                <img src={redBag.src}/>
            </ImageContainer>
            <BatchOrderDiv className='display-flex'>
                <p className='neworderheading'>Order 4</p>
                <p className='highlight-text'>#1289</p>
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

export default OrderDescription


const BatchOrderDiv = styled.div`
    max-width: max-content;
    margin: 0px auto;
    solid: 1px dotted black;
`

const ImageContainer = styled.div`
    max-width: max-content;
    margin: 10px auto 5px;
`