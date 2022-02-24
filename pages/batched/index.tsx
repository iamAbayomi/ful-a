import styled from "styled-components"
import Layout from "../../components/Layouts/DashboardLayout"
import redflag from '../../assets/images/red-flag.svg'

import Title from "../../components/ui/Typography/Title"
import addIcon from "../../assets/images/add.svg"
import BatchedOrderCard from "../../components/ui/BatchedOrderCard"
import optionsMenu from '../../assets/images/options-menu.svg'
import downArrow from "../../assets/images/down-arrow.svg"
import upArrow from "../../assets/images/up-arrow.svg"
import bicycle from "../../assets/images/bicycle.svg"
import bag from "../../assets/images/bag.svg"
import { useRouter } from "next/router"


const Batched = () => {
    const router = useRouter()

    function createNewBatch() {
        router.push('/createnewbatch')    
    }

    return(
        <Layout>
            <Header>
                <Title text={'Batched Orders'} />
                <div className='display-flex header-icon'>
                    <div className='display-flex icon-container'>
                        <img
                            className='red-flag-logo'
                            src={redflag.src}
                        />
                    </div>
                </div>
            </Header>
            <div className="header-section">
                <button className="dashboard-red-button" onClick={createNewBatch}>
                    <img className="add-icon" src={addIcon.src} />
                    <p>Create New Batch</p>
                </button>
                <NotificationText className="highlight-text">2 batched orders </NotificationText>
            </div>
            <BatchedOrderCard />
        </Layout>

        
    )
}

export default Batched


const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 20px 0px 20px;
`

const NotificationText = styled.p`
    padding: 10px 0px 0px;
`
