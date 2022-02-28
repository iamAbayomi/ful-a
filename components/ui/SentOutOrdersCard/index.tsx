import bag from "../../../assets/images/bag.svg"
import styled from "styled-components"
import bicycle from  "../../../assets/images/bicycle.svg"
import downArrow from "../../../assets/images/down-arrow.svg"
import OrderRow from "../OrderRow"
import { useRouter } from "next/router"
import Badge from "../Badge"
//"/../../assets/images/bicycle.svg"

const SentOutOrdersCard = () => {
    const router = useRouter()
    function moveToBatchedDetails(){
        router.push("/batchedorderdetails")
    }
    return(
        <div className="card-elevated sentoutorder-card">
            <BatchedOrderHeader className="display-flex">
                <div className='display-flex batched-order-no-container'>
                    <p className='batched-order-heading'>Batch 2</p>
                    <p className='batched-order-no'>#C267</p>
                    <Badge badgeColor="#B7F1B687" badgeText={"Sent Out"} />
                </div>
            </BatchedOrderHeader>
            <div className="order-section display-flex-withoutspace">
                <img src={bag.src} />
                <p className="orders-notification">3 orders</p>
            </div>
            <RidersNameContainer className={"display-flex"}>
                <div className="display-flex-withoutspace">
                    <img src={bicycle.src} />
                    <RidersName className="orders-notification">Timi Busola</RidersName>
                </div>
                <img src={downArrow.src} />
                {/* <img src={upArrow.src} /> */}
            </RidersNameContainer>
            <OrderRowContainer onClick={moveToBatchedDetails} >
                <OrderRow />
                <OrderRow/>
            </OrderRowContainer>
        </div>
    )
}

export default SentOutOrdersCard



const NewOrderNo = styled.p`
    margin: 10px 0px 20px;
`


const OrderRowContainer = styled.div`
    margin: 0px -20px 0px;
    background: #F9F9F9;
    padding: 0px 20px;
`

const RidersNameContainer = styled.div`
    padding: 0px 0px 20px;
`

const BatchedOrderHeader = styled.div`
    margin: 20px 0px;
`

const RidersName = styled.p`
    // margin-left: -10px;
`