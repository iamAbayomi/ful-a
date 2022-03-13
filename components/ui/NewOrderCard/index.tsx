
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import rightArrow from '../../../assets/images/right-arrow.svg'
import { useAppDispatch, useAppSelector } from "../../../redux/hook"
import {  
          getNewOrderCheckbox, 
          getAllOrderSelectedState, 
          increaseNoOfOrder, 
          reduceNoOfOrder,
          resetNoOfOrder,
          toggleSelectedMenuState,
          getSelectedMenuState,} from "../../../redux/reducers/NewOrderSlice"
import eventBus from "../../../utils/eventBus"
import Badge from "../Badge"

const NewOrderCard = () => {
    const router = useRouter()
    const [checkboxState, setCheckboxState ] = useState<boolean>(false)
    const newOrderCheckbox = useAppSelector(getNewOrderCheckbox)
    const menuState = useAppSelector(getSelectedMenuState)
    const dispatch = useAppDispatch()
    const checkBoxRef = useRef(null)
    const highNewOrderRef = useRef(null)

    const checkboxContainerRef = useRef(null)

    useEffect(()=> {
        //console.log('checkbox ', checkboxState + ' newOrderCheckbox ', newOrderCheckbox)

        eventBus.on("closeNewOrders", (data: any)=> {
            checkBoxRef.current.checked = false
            checkboxContainerRef.current.classList.toggle("hide-checkbox")
            highNewOrderRef.current.classList.remove("card-highlight")
            dispatch(resetNoOfOrder())
            dispatch(toggleSelectedMenuState())
            console.log("menuState ", menuState)
            //console.log('checkbox ', checkboxState + ' newOrderCheckbox ', newOrderCheckbox)
            // console.log("This is the data", data)
        })
    })

    function changeOrdersState() {
        let temp = checkboxState
        checkBoxRef.current.checked = !temp
        setCheckboxState(!temp)
        temp == false ? dispatch(increaseNoOfOrder(true)) : dispatch(reduceNoOfOrder(false))
        // console.log("temp ", temp, " checkbox ", checkboxState)
    }


    function goToCheckDetails (){
        router.pathname == "/selectorder" ? changeOrdersState() :
        menuState  ? changeOrdersState() : router.push("/batchedorderdetails")  
    }

    
    return(
        <div ref={highNewOrderRef} onClick={goToCheckDetails} className={`card ${checkboxState ? "card-highlight" : ''}` } >
            <div className="card-container">
                <NewOrderCardHeader className="display-flex">
                    <label ref={checkboxContainerRef} className="container hide-checkbox">
                        <input 
                            id="checkbox"
                            type="checkbox" 
                            ref={checkBoxRef}
                            // onClick={changeOrdersState}
                              />
                        <span className="checkmark"></span>
                    </label>
                    <p className="neworderheading" >Order</p>

                    <div className="display-flex">
                        <p className="neworderno">#1259</p>
                        {router.pathname == "/redflags" ? <Badge badgeText={"Delayed"} badgeColor="#FFE3CD" badgeTextColor="#DC3D1E" />
                              : <div/>
                        }
                        
                        <RightArrowImage  src={rightArrow.src} />
                    </div>
                </NewOrderCardHeader>

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
    width: 7px;
`


const NewOrderCardHeader = styled.div`
    margin: 5px 0px 10px;
`