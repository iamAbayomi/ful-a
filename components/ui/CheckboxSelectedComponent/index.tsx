import { useRouter } from "next/router"
import styled from "styled-components"
import closeButton from '../../../assets/images/close-button.svg'
import { useAppSelector } from "../../../redux/hook"
import { getNoOfOrdersSelected } from "../../../redux/reducers/NewOrderSlice"

const CheckboxSelectedComponent =() =>{
    const router = useRouter()

    const noOfOrders = useAppSelector(getNoOfOrdersSelected)

    function moveToBatch(){
        router.push("/batched")
    }
    return (
        <div>
            <HeaderSection className ="display-flex">
                <RedButton onClick={moveToBatch} className='dashboard-red-button'>Add to new batch</RedButton>
                <NotificationOrderText className="highlight-text"> {noOfOrders} orders selected </NotificationOrderText>
                <img src={closeButton.src}  />
            </HeaderSection>
        </div>
    )
}

export default CheckboxSelectedComponent


const NotificationOrderText = styled.p`
    margin: 10px 20px 10px 20px;
`


const HeaderSection = styled.div`
    margin: 10px 0px 0px 0px;
`

const RedButton = styled.div`
    background: #FF1B03;
    border-radius: 5px;
    max-width: max-content;
    font-family: 'Mulish';
    color: white;
    padding: 10px;
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 19px;
`