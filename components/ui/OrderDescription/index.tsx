import styled from "styled-components"
import redBag from '../../../assets/images/red-bag.svg'

const OrderDescription = () => {
    return(
        <Container className="main">
            <ImageContainer className="">
                <img src={redBag.src}/>
            </ImageContainer>
            <BatchOrderDiv className='display-flex'>
                <p className='neworderheading'>Order 4</p>
                <p className='highlight-text'>#1289</p>
            </BatchOrderDiv>
            <div className="order-items-section">
                <div className="display-flex">
                    <p className="small-text">ORDER ITEMS</p>
                    <p className="green-text"> Package Verified</p>
                </div>
                <div className="display-flex">
                    <p className="medium-text">Baneless beef</p>
                    <p className="table-text">2 pieces</p>
                    <p className="table-text">2kg</p>
                </div>
                <div className="display-flex">
                    <p className="medium-text">Ponmo</p>
                    <p className="table-text">2 pieces</p>
                    <p className="table-text">1kg</p>
                </div>
                <div className="display-flex">
                    <p className="medium-text">Beefy Meaty</p>
                    <p className="table-text">2 pieces</p>
                    <p className="table-text">2kg</p>
                </div>
            </div>
            <NextOrderContainer className="">
                <p className="info-link">Print Package list</p>
                <div className="center-div">
                    <RedButton className="red-button">Proceed to next order</RedButton>
                </div>
                <p className="info-link">Back to batched orders</p>
            </NextOrderContainer>
        </Container>
        
    )
}

export default OrderDescription


const BatchOrderDiv = styled.div`
    max-width: max-content;
    margin: 0px auto;
`

const ImageContainer = styled.div`
    max-width: max-content;
    margin: 10px auto 5px;
`

const Container = styled.div`
    padding: 20px;
    border: 1px solid #777e964f;
    border-radius: 20px;

`

const RedButton = styled.button`
    border-radius: 12px;
    margin: 5px auto;
    height: 44px;
    color: white;
    font-weight: 600;
    font-size: 15px;
`


const NextOrderContainer = styled.div`
    margin: 80px auto 20px;
`