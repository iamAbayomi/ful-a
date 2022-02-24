import styled from 'styled-components'
import navArrow from '../../assets/images/nav-arrow.svg'
import MulishFonts from '../../components/ui/MulishFonts'

const CreateNewBatch =() => {
    return (
        <Background className="main dashboard">
            <MulishFonts />
            <div className='dashboard-contents'>
                <img src={navArrow.src} />
                <p className='page-title'>Create New Batch</p>

                <div className='batch-number-container'>
                    <p className='highlight-text'>Batch Number 4</p>
                    <input type={"name"} className='input-text' placeholder="#C397" disabled />
                </div>
                
                <div className='assign-rider-container'>
                    <p className='highlight-text'>Assign Rider</p>
                    <input type={"name"} className='input-text' placeholder="Type rider's name or ID" />
                </div>

                <div className='select-order-container'>
                    <p className='highlight-text' >Select Order</p>
                    <input type="name" className='input-text' />
                </div>

                <RedButton className='red-button'> Create Batch</RedButton>
            </div>
        </Background>
    )
}

export default CreateNewBatch


const Background = styled.div`
    background: white;
`

const RedButton = styled.div`
    background: #FF1B03;
    /* max-width: 300px; */
    width: 100%;
    height: 40px;
    box-shadow: 0px 2px 10px rgb(255 145 139 / 50%);
    border-radius: 8px;
    border: 0px;
    margin: 100px auto 0px auto;
    color: white;
    font-size: 14px;
`