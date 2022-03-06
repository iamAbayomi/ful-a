import styled from "styled-components"



type props = {
    badgeColor?: string,
    badgeText: string,
    badgeTextColor? : string
}

const Badge =({badgeColor, badgeText, badgeTextColor= "#247322"} : props) =>{
    return (
        <Container style={{backgroundColor: `${badgeColor}`}} className=''>
            <p style={{color: `${badgeTextColor}`}} className="badge-text"> {badgeText} </p>
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
