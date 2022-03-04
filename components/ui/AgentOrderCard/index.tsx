import { Image } from "@chakra-ui/react"
import styled from "styled-components"
import bag from "../../../assets/images/bag-red.svg"

type props = {
    agentCardNo: number,
    agentCardImg: string,
    agentCardTitle: string,
    agentCardBackground?: string
}

const AgentOderCard: React.FC<props> = (props) => {
    return(
        <Container style={{ backgroundColor: props.agentCardBackground}} className="riders-card">
            <div>
                <OrderNo>{props.agentCardNo}</OrderNo>
                <Image src={props.agentCardImg} />
                {/* <Image src="" /> */}
            </div>
            <AgentCardDetails>{props.agentCardTitle}</AgentCardDetails>
        </Container>
    )
}

export default AgentOderCard


const Container = styled.div`
    background: #DFDFDF;
    mix-blend-mode: normal;
    border-radius: 7px;
    padding: 10px 20px;
    max-width: 158px;
    margin: 10px 10px;
    display: flex;
    flex-direction: row;
    /* align-items: unset; */
    justify-content: space-between;
`

const AgentCardDetails = styled.div`
    max-width: 90px;
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    color: #596273;
    margin: 10px 0px 0px 20px;
    box-sizing: border-box;
`

const OrderNo = styled.p`
    margin: 0px 0px 10px;
    max-width: 70px;
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.01em;

    /* Header txt color */

    color: #092443;

`