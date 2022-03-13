import styled from "styled-components"
import {Image} from "@chakra-ui/react"
import { useState } from "react"

type props = { 
    onClick? : () => void
}

const ReconcileMoney= ({onClick} : props) => {
    const [showInputField, setShowInputField] = useState<any>(1)
    return(
        <div className="backdropdown">
            <div className="backdropdown-line"></div>
            {/* <Image 
                src={"/close-button.svg"}
                style={{float: "right"}}
                // onClick={closeMethod}
            /> */}
            <p className="order-title">Reconcile money</p>
            <p className="order-subtitle">What do you want to reconcile first</p>
            {/* <p className="order-title">Reconcile Cash</p>
            <p className="order-subtitle">Input cash amount </p> */}
            {
                showInputField ==1 ? <button className="button-red button-pink"  onClick={()=> {setShowInputField(2)}}>Cash</button>  :
                showInputField ==  2 ? <InputText type={"name"} className="input-text" placeholder="N20,000" /> : <div />
            }   
            <button onClick={onClick} className="red-button">Continue</button>
        </div>
    )
}

export default ReconcileMoney


const ReconcileCash  = () =>{
    return(
        <div>
            <p>Reconcile Cash</p>
            <p>Input Cash amount</p>
            <input type={"name"} />
            <button className="red-button">Confirm</button>
        </div>
    )
}



const CashReconciledSuccesful = () => {
    return(
        <div className="backdropdown">
            {/* <div>
                <Image 
                    src="/check.svg"
                    className="check-image"
                    style={{ marginTop: "78px" }}
                />
                <Text>Cash reconciled successfully</Text>
                <p className="order-subtitle">N20,000 total cash at hand. Cash account is balance</p>
                <button className="red-button">Okay</button>
            </div> */}
            <CashReconciliationError />
        </div>
    )
}

const CashReconciliationError = () => {
    return(
        <div>
            <Image 
                src="/dangercircle.svg"
                className="check-image"
                style={{ marginTop: "78px" }}
            />
            <Text>Cash reconciliation error</Text>
            <ErrorContainer className="">
                <Image 
                    src="/dangercircle.svg"
                    className=""
                    style={{  width: "25px" }}
                />
                <p className="order-subtitle">Cash account not balanced</p>
            </ErrorContainer>
            <button className="red-button">Reconcile cash account again</button>

        </div>    
    )
}

// export default CashReconciledSuccesful

// const CashReconciledSuccesful


//const s

const InputText = styled.input`
    margin: 30px 0px 40px;
`

const Text = styled.div`
    font-family: Mulish;
    font-style: normal;
    font-size: 16px;
    font-weight: 600;
    /* line-height: 30px; */
    clear: both;
    margin: 10px auto 0px;
    text-align: center;
    color: #092443;
    max-width: 200px;
`


const ErrorContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 72px auto 0px;
    max-width: 190px;
    align-items: center;
`