import styled from "styled-components"



type props = {
    badgeColor?: string,
    badgeText: string
}

const Badge =({badgeColor, badgeText} : props) =>{
    return (
        <Container style={{backgroundColor: `${badgeColor}`}} className=''>
            <p style={{color: `#247322`}} className="badge-text"> {badgeText} </p>
        </Container>
    )
}

export default Badge


const Container = styled.p`
    max-width: max-content;
    height: 15px;
    margin: 0px 0px 0px 70px;
    padding: 5px 10px 5px 10px;
    background: rgba(255, 213, 211, 0.37);
    border-radius: 30px;
    box-sizing: content-box;
`
