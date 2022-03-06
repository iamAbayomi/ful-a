
import optionsMenu from '../../../assets/images/options-menu.svg'
import { Image } from '@chakra-ui/react'
import downArrow from "../../../assets/images/down-arrow.svg"
import upArrow from "../../../assets/images/up-arrow.svg"
import bicycle from "../../../assets/images/bicycle.svg"
import bag from "../../../assets/images/bag.svg"
import styled from 'styled-components'
import OrderRow from '../OrderRow'
import { useRouter } from 'next/router'
import KebabMenuDropdownVert from '../KebabMenuDropdownVert'
import { useEffect, useRef, useState } from 'react'
import Badge from '../Badge'

type props = {
    // showOrderRow?: boolean
}

const downArrowSrc = '/down-arrow.svg'
const upArrowSrc = '/up-arrow.svg'

const BatchedOrderCard = () => {
    const router = useRouter()
    const showOrdersRef = useRef(null)    
    const [showOrderRow, setShowOderRow] = useState<boolean>(false)

    function moveToBatchedDetails(){
        router.push("/batchedorderdetails")
    }

    function showOrders(){
        let temp = !showOrderRow
        setShowOderRow(temp)
        // showOrdersRef.current.classList.toggle("hide")
    }

    return (
        <div className="card-elevated">
            <BatchedOrderHeader className="display-flex">
                <div className='batched-order-no-container'>
                    <p className='batched-order-heading'>Batch 2</p>
                    <p className='batched-order-no'>#C267</p>
                </div>
                { router.pathname == "/sentout" ? <Badge badgeColor="#B7F1B687" badgeText={"Sent Out"} /> :
                    <KebabMenuDropdownVert menuItems={['Edit Batch', 'Confirm Sent Out']} menuItemMethod={() => {}} />}
                
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
                {/* <img  src={downArrow.src} /> */}
                <Image onClick={showOrders} src={`${showOrderRow ?  upArrowSrc : downArrowSrc}`} />
                {/* <img src={upArrow.src} /> */}
            </RidersNameContainer>
            <OrderRowContainer ref={showOrdersRef} className={`${showOrderRow ? '' : 'hide'}`} onClick={moveToBatchedDetails} >
                <OrderRow />
                <OrderRow/>
            </OrderRowContainer>
        </div>
    )
}


export default BatchedOrderCard


const NewOrderNo = styled.p`
    margin: 10px 0px 20px;
`

const RidersName = styled.p`
    margin-left: 10px;
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