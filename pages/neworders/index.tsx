import styled from "styled-components";
import Layout from "../../components/Layouts/DashboardLayout";
import KebabMenuDropdown from "../../components/ui/KebabMenuDropdown";
import NewOrderCard from "../../components/ui/NewOrderCard";
import redflag from '../../assets/images/red-flag.svg'
import eventBus from "../../utils/eventBus";
import CheckboxSelectedComponent from "../../components/ui/CheckboxSelectedComponent";
import { useAppSelector } from "../../redux/hook";
import { getNoOfOrdersSelected } from "../../redux/reducers/NewOrderSlice";

function selectOrders (item: any){
    eventBus.dispatch("closeNewOrders", { message: "close Orders"})
}


const NewOrdersIcon = () => {
    return(
        <div className='display-flex header-icon'>
            <div className='display-flex icon-container'>
                <img
                    className='red-flag-logo'
                    src={redflag.src}
                />
            </div>
            <div className='icon-container' style={ {margin: '0px 20px 0px 0px'}}>
                <KebabMenuDropdown menuItems={['Select', 'Auto Batch Order']} menuItemMethod={selectOrders} />
            </div>
        </div>
    )
}

const NewOrders = () => {
    const noOfOrders = useAppSelector(getNoOfOrdersSelected)

    return(
        <Layout title="New Orders" headIcon={<NewOrdersIcon/>} headElements={<CheckboxSelectedComponent />} >
                <NewOrderContainer className={`${noOfOrders > 0 ? "add-padding": "" }`} >
                    { [1,2,3,4,3].map((item) => (<NewOrderCard />))}
                </NewOrderContainer>
        </Layout>
    )
}

export default NewOrders

const NewOrderContainer = styled.div`
   margin: 0px 0px;
`