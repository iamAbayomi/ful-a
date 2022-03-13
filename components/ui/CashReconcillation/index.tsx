import styled from "styled-components"
import {Image} from "@chakra-ui/react"


type props = {
    onClick? : () => void,
    showErrorState: boolean
}

const CashReconciliation = ({onClick, showErrorState} : props) => {
    return(
        <div className="backdropdown">
            <div>
                <Image 
                    src={ showErrorState ? "/dangercircle.svg" : "/check.svg"}
                    className="check-image"
                    style={{ marginTop: "78px" }}
                />
                <Text>{"Cash reconciled successfully"}</Text>
                
                {
                    showErrorState ? 
                    <ErrorContainer className="">
                        <Image 
                            src="/dangercircle.svg"
                            className=""
                            style={{  width: "25px" }}
                        />
                        <p className="order-subtitle">Cash account not balanced</p>
                    </ErrorContainer>
                    :
                    <p className="order-subtitle">
                        N20,000 total cash at hand. Cash account is balance
                    </p>
                }
                <button onClick={onClick} className="red-button">
                    { showErrorState? "Reconcile cash account again" : "Okay"}
                </button>
            </div>
            
        </div>
    )
}

export default CashReconciliation



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