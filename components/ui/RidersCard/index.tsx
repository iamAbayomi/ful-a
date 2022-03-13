import styled from "styled-components"
import rightArrow from "../../../assets/images/right-arrow.svg"

type props ={
    ridersText: string,
    ridersNo: number,
    backgroundColor?: string
}

const RidersCard: React.FC<props> = (props) =>{
    return(
        <Container style={ { backgroundColor: props.backgroundColor}} className="riders-card">
            <p>{props.ridersText}</p>
            <RidersNoSection className="display-flex">
                <p>{props.ridersNo}</p>
                <img src={rightArrow.src} />
            </RidersNoSection>
        </Container>
    )
}


export default RidersCard


const Container = styled.div`
    background: #DFDFDF;
    mix-blend-mode: normal;
    border-radius: 7px;
    padding: 10px 20px;
    max-width: 158px;
    margin: 10px 10px;
    display: flex;
    flex-direction: column;
    /* align-items: unset; */
    justify-content: space-around;
`

const RidersNoSection = styled.div`
    margin: 10px 0px 0px;
`