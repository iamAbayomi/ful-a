import styled from "styled-components"

const NewOrderCard = () => (
    <div className="card">
        <div className="display-flex">
            <p>Order</p>
            <p>#1259</p>
        </div>
        <p className="highlight-text">Address </p>
        <p>No 26, Alaakia Road, Bodija</p>
        <p className="highlight-text" >Delivery Time</p>
        <p>3:00pm</p>
        
    </div>
)


export default NewOrderCard


const Card = styled.div`

`