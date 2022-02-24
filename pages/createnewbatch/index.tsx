import styled from 'styled-components'
import navArrow from '../../assets/images/nav-arrow.svg'

const CreateNewBatch =() => {
    return (
        <Background className="main dashboard">
            <img src={navArrow.src} />
            <p>Create New Batch</p>
            <div className='batch-number-container'>
                <p>Batch Number 4</p>
                <input type={"name"} placeholder="#C397" />
            </div>
            <div className='assign-rider-container'>
                <p>Assign Rider</p>
                <input type={"name"} placeholder="Type rider's name or ID" />
            </div>

            <div className='select-order-container'>
                <p>Select Order</p>
                <input type="" />
            </div>
            <button className='red-button'> Create Batch</button>
        </Background>
    )
}

export default CreateNewBatch


const Background = styled.div`
    background: white;
`