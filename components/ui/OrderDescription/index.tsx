import { useRouter } from "next/router"
import styled from "styled-components"
import redBag from '../../../assets/images/red-bag.svg'

const OrderDescription = () => {
    const router = useRouter()

    function confirmBatch(){
        router.push('/confirmbatch')
    }
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
                <table className="table-div" style={{width: '100%'}}>
                        <tr>
                            <td><p className="medium-text">Baneless beef</p></td>
                            <td><p className="table-light-text">2 pieces</p></td>
                            <td><p className="table-light-text">2kg</p></td>
                        </tr>
                        <tr>
                            <td><p className="medium-text">Ponmo</p></td>
                            <td><p className="table-light-text">2 pieces</p></td> 
                            <td><p className="table-light-text">1kg</p></td>
                        </tr>
                        <tr>
                            <td><p className="medium-text">Beefy Meaty</p></td>
                            <td><p className="table-light-text">2 pieces</p></td>
                            <td><p className="table-light-text">2kg</p></td>
                        </tr>
                </table>
            </div>
            <NextOrderContainer className="">
                <p className="info-link">Print Package list</p>
                <p className="green-text">You have packaged all the order in this batch</p>
                <div className="center-div">
                    <RedButton onClick={confirmBatch} className="red-button">Proceed to next order</RedButton>
                </div>
                <p className="info-link">Back to batched orders</p>
            </NextOrderContainer>
        </Container>
        
    )
}

export default OrderDescription



const Container = styled.div`
    padding: 20px;
    border: 1px solid #777e964f;
    border-radius: 20px;
    height: auto;
`


const BatchOrderDiv = styled.div`
    max-width: max-content;
    margin: 0px auto;
`

const ImageContainer = styled.div`
    max-width: max-content;
    margin: 10px auto 5px;
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