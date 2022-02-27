import styled from "styled-components"
import closeButton from  "../../../assets/images/close-button.svg"

const OrderItemsComponent = () => {
    return (
        <Container>
            {/* <div className="order-items-header display-flex"> 
                
            </div> */}
            <table style={{width: '100%'}} >
                <tr>
                    <th><p className="caption-text">ORDER ITEMS</p></th>
                    <th><p className="caption-text">TOTAL WEIGHT</p></th>
                    <th><p className="caption-text">QUANTITY</p></th>
                    <th></th>
                </tr>
                <tr>
                    <td>
                        <OrderItemsName>Boneless Beef</OrderItemsName>
                        <Subtitle className="subtitle">1kg/unit</Subtitle>
                    </td>
                    <td>
                    <TotalWeight>2kg</TotalWeight>
                    </td>
                    <td>
                        <OrderItemQuantity className="order-items-quantity">
                            {/* <img src={""}/> */}
                            <QuantityButton>-</QuantityButton>
                            <Quantity>2</Quantity>
                            <QuantityButton>+</QuantityButton>
                            {/* <img src={""}/> */}
                        </OrderItemQuantity>
                    </td>
                    <td>
                        <img src={closeButton.src}/>
                    </td>
                </tr>
                
                
            </table>
        </Container>
    )
}

export default OrderItemsComponent


const Container = styled.div`
    background-color: #F6F5F5;
    padding: 10px 20px;
    border-radius: 2px
`


const Subtitle = styled.p`
    margin: 0px;
`

const OrderItemsName = styled.p`
    margin: 16px 0px 5px;
`


const TotalWeight = styled.p`
    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 19px;
    /* grey-light */
    color: #8F92A1;
`

const OrderItemQuantity = styled.div`
    display: flex;
    height: 31px;
    border: 1px solid black;
    box-sizing: border-box;
    margin: 16px;
`

const Quantity = styled.p`
    border-left: 1px solid black;
    border-right: 1px solid black;
    font-size: 14px;
    padding: 5px;
    margin: 0px;
    box-sizing: border-box;
`

const QuantityButton = styled.p`
    background-color:  #FFE3CD;
    margin: 0px;
    padding: 5px;
`