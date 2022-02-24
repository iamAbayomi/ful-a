import styled from "styled-components"

const OrderRow = () => {
    return(
        <div className="order-row">
            <div className='display-flex'>
                <div className="order-number">
                    <p className='neworderheading'>Order 4</p>
                    <NewOrderNo className='neworderno'>#1270</NewOrderNo>
                </div>
                <div className='badge'>
                    <p className="badge-text"> Package </p>
                </div>
            </div>
            <div className='neworder-line'></div>
        </div>
    )
}

export default OrderRow


const NewOrderNo = styled.p`
    margin: 10px 0px 20px;
`