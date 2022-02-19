import styled from "styled-components"

const NewOrderCard = () => (
    <div className="card">
        <div className="card-container">
            <div className="display-flex">
                <p className="newordertitle" >Order</p>
                <div className="display-flex">
                    <p className="neworderno">#1259</p>
                </div>
            </div>
            <div className="neworder-line"/>
            <p className="highlight-text">Address </p>
            <p className="normal-text" >No 26, Alaakia Road, Bodija</p>
            <p className="highlight-text" >Delivery Time</p>
            <p className="normal-text">3:00pm</p>
        </div>
    </div>
)


export default NewOrderCard


const Card = styled.div`

`