import styled from 'styled-components'
import downArrow from '../../../assets/images/down-arrow.svg'

const index = () => {
    return(
        <div className="display-flex">
            <HeaderNormalText className="body-normal-text">FOR TODAY</HeaderNormalText>
            <img src={downArrow.src} />
        </div>
    )
}


export default index


const HeaderNormalText = styled.p`
    margin: 16px 0px 21px;
`