import { ChangeEvent, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import rightArrow from '../../../assets/images/right-arrow.svg'
import { useAppDispatch, useAppSelector } from "../../../redux/hook"
import {  changeSingleCheckboxState, 
          getNewOrderCheckbox, 
          getAllOrderSelectedState, 
          getRef, 
          getSingleCheckboxState, 
          increaseNoOfOrder, 
          reduceNoOfOrder,
          clearAllOrderSelected,
          toggleNewOrdersCheckbox,
          resetNoOfOrder,} from "../../../redux/reducers/NewOrderSlice"
import eventBus from "../../../utils/eventBus"

const NewOrderCard = () => {
    const [checkboxState, setCheckboxState ] = useState<boolean>(false)
    const newOrderCheckbox = useAppSelector(getNewOrderCheckbox)
    const allOrderSelectedState = useAppSelector(getAllOrderSelectedState)
    const dispatch = useAppDispatch()
    // const checkboxRef = useAppSelector(getRef)
    const closeButtonRef = useRef(null)
    const highNewOrderRef = useRef(null)

    const checkboxContainerRef = useRef(null)

    useEffect(()=> {
        console.log('checkbox ', checkboxState + ' newOrderCheckbox ', newOrderCheckbox)

        

        eventBus.on("closeNewOrders", (data: any)=> {
            closeButtonRef.current.checked = false
            checkboxContainerRef.current.classList.toggle("hide-checkbox")
            highNewOrderRef.current.classList.remove("card-highlight")
            dispatch(resetNoOfOrder())
            //closeButtonRef.current.classList.toggle("hide-checkbox")
            //dispatch(toggleNewOrdersCheckbox())
            console.log('checkbox ', checkboxState + ' newOrderCheckbox ', newOrderCheckbox)
            // console.log("This is the data", data)
        })
    })

    function changeOrdersState() {
        let temp = checkboxState
        // allOrderSelectedState && checkboxState == true ? setCheckboxState(false) : setCheckboxState(!temp)
        setCheckboxState(!temp)
        temp == false ? dispatch(increaseNoOfOrder(true)) : dispatch(reduceNoOfOrder(false))
    }

    function onCheckboxState(){

    }
    
    
    return(
        // <div ref={highNewOrderRef} className={`card ${checkboxState  && newOrderCheckbox ? "card-highlight" : ''}` } >
        <div ref={highNewOrderRef} className={`card ${checkboxState ? "card-highlight" : ''}` } >
            <div className="card-container">
                <div className="display-flex">
                    {/* <label ref={checkboxContainerRef} className={`container ${newOrderCheckbox ?  "" : 'hide-checkbox' }`}> */}
                    <label ref={checkboxContainerRef} className="container hide-checkbox">
                        <input 
                            id="checkbox"
                            type="checkbox" 
                            // checked={checkboxState}
                            // onChange={changeOrdersState}
                            ref={closeButtonRef}
                            onClick={changeOrdersState}
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