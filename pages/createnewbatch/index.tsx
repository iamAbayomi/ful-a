import styled from 'styled-components'
import navArrow from '../../assets/images/nav-arrow.svg'

const CreateNewBatch =() => {
    return (
        <Background className="main dashboard">
            <img src={navArrow.src} />
        </Background>
    )
}

export default CreateNewBatch


const Background = styled.div`
    background: white;
`