import styled from "styled-components"
import {Image} from "@chakra-ui/react"

type props = {
    closeMethod: any;
}

const ModalContainer = ({closeMethod }: props) => {
    return(
        <Container className="card-div">
            <Image 
                src={"/close-button.svg"}
                style={{float: "right"}}
                onClick={closeMethod}
            />
            <Image 
                src="/check.svg"
                className="check-image"
            />
            <Text>Are you done fufiling orders for that day</Text>
            <button className="button-red">Yes! I'm done</button>
            <button className="button-white">No, going for a short break</button>
        </Container>
    )
}

export default ModalContainer


const Container = styled.div`
    max-width: 300px;
    margin: 20px auto;
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
    max-width: 180px;
`
