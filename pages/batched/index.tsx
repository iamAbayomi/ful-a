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
import Notifications from "../../components/ui/Notifications"
import Dashboard from "../../components/icons/Dashboard"


type props ={
    routingMethod: () => void
}

const HeaderElements = ({routingMethod} : props) => {
    return(
        <div className="header-section">
            <button className="dashboard-red-button" onClick={routingMethod}>
                <img className="add-icon" src={addIcon.src} />
                <DashboardButtonText>Create New Batch</DashboardButtonText>
            </button>
            {/* <Notifications/> */}
            <NotificationText className="highlight-text">2 batched orders </NotificationText>
        </div>
    )
}

const Batched = () => {
    const router = useRouter()
    function createNewBatch() {
        router.push('/createnewbatch')    
    }

    return(
        <Layout title="Batched Orders" headElements={<HeaderElements routingMethod={createNewBatch} />}>
            
            {[1,2,3,4].map((item) => 
                 <BatchedOrderCard />    
            )}
            <BatchedOrderCard showOrderRow={true} />
            <BatchedOrderCard showOrderRow={true} />
        </Layout>
    )
}

export default Batched


const Header = styled.div`
`

const NotificationText = styled.p`
    padding: 10px 0px 0px;
`


const DashboardButtonText = styled.p`
    margin: 10px 0px 10px;
`