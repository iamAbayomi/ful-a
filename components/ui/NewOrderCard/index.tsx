import { ChangeEvent, useState } from "react"
import styled from "styled-components"
import rightArrow from '../../../assets/images/right-arrow.svg'
import { useAppDispatch, useAppSelector } from "../../../redux/hook"
import {  changeSingleCheckboxState, 
          getNewOrderCheckbox, 
          getAllOrderSelectedState, 
          getRef, 
          getSingleCheckboxState, 
          increaseNoOfOrder, 
          reduceNoOfOrder,} from "../../../redux/reducers/NewOrderSlice"

const NewOrderCard = () => {
    const [checkboxState, setCheckboxState ] = useState<boolean>(false)
    const newOrderCheckbox = useAppSelector(getNewOrderCheckbox)
    const allOrderSelectedState = useAppSelector(getAllOrderSelectedState)
    const dispatch = useAppDispatch()
    // const checkboxRef = useAppSelector(getRef)
    

    function changeOrdersState() {
        let temp = checkboxState
        allOrderSelectedState && checkboxState == true ? setCheckboxState(false) : setCheckboxState(!temp)
        temp == false ? dispatch(increaseNoOfOrder(true)) : dispatch(reduceNoOfOrder(false))
    }
    
    
    return(
        <div className={`card ${checkboxState  && newOrderCheckbox ? "card-highlight" : ''}` } >
            <div className="card-container">
                <div className="display-flex">
                    <label className={`container ${newOrderCheckbox ?  "" : 'hide-checkbox' }`}>
                        <input 
                            //classd
                            id="checkbox"
                            type="checkbox" 
                            checked={checkboxState}
                            onChange={changeOrdersState}
                            //onClick={changeOrdersState}
                              />
                        <span className="checkmark"></span>
                    </label>
                    <p className="neworderheading" >Order</p>
                    <div className="display-flex">
                        <p className="neworderno">#1259</p>
                        <RightArrowImage  src={rightArrow.src} />
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
}


export default NewOrderCard


const Card = styled.div`

`

const RightArrowImage = styled.img`
    margin: 0px 0px 0px 20px;
`