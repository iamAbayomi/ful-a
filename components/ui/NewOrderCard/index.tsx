import { useState } from "react"
import styled from "styled-components"
import rightArrow from '../../../assets/images/right-arrow.svg'

const NewOrderCard = () => {
    const [checkboxState, setCheckboxState ] = useState<boolean>(false)
    function changeCardBackgroundColor() {
        let temp = checkboxState
        setCheckboxState(!temp)
    }
    return(
        <div className={`card ${checkboxState ? "card-highlight" : ''}` } >
            <div className="card-container">
                
                <div className="display-flex">
                    {/* <label className="container">
                        <input type="checkbox" onClick={changeCardBackgroundColor}/>
                        <span className="checkmark"></span>
                    </label> */}
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