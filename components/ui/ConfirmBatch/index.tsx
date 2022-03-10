import { useRouter } from "next/router"
import styled from "styled-components"
import checkedBag from "../../../assets/images/checked-bag.svg"
import closeButton from "../../../assets/images/close-button.svg"

type props ={
    method?: any,
    onClose: any
}

const ConfirmBatch =({method, onClose}: props) => {
    const router = useRouter()

    function confirmBatch(){
        router.push("/neworders")
    }

    return(
        <Container className="main">
            <div>
                <Close onClick={onClose} src={closeButton.src} />
                <div className="center-div clear-float">
                    <img src={checkedBag.src} />
                </div>
                <p className="heading-text">Confirm Batch 3 has been sent out</p>
            </div>
            <div className="center-div">
                <RedButton onClick={onClose} className="red-button">Yes! I confirm</RedButton>
            </div>
        </Container>
    )
}

export default ConfirmBatch

const RedButton = styled.button`
    color: white;
    font-weight: 600;
    font-size: 15px;
`

const Container = styled.div`
    // border: 1px solid #777e964f;
    height: auto;
    margin: 80px auto;
    padding: 20px 10px 5px;
    background: #FFFFFF;
    border-radius: 20px;
`

const Close = styled.img`
    float: right;
`