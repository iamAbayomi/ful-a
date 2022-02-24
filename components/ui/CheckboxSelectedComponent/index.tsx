import styled from "styled-components"
import closeButton from '../../../assets/images/close-button.svg'

const CheckboxSelectedComponent =() =>{
    return (
        <div>
            <HeaderSection className ="display-flex">
                <RedButton className='dashboard-red-button'>Add to new batch</RedButton>
                <NotificationOrderText className="highlight-text">3 orders selected </NotificationOrderText>
                <img src={closeButton.src}  />
            </HeaderSection>
        </div>
    )
}

export default CheckboxSelectedComponent


const NotificationOrderText = styled.p`
    margin: 10px 20px 10px 20px;
`


const HeaderSection = styled.div`
    margin: 10px 30px 0px 30px;
`

const RedButton = styled.div`
    background: #FF1B03;
    border-radius: 5px;
    max-width: max-content;
    font-family: 'Mulish';
    color: white;
    padding: 10px;
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 19px;
`