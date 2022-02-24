import styled from "styled-components"
import Layout from "../../components/Layouts/DashboardLayout"
import redflag from '../../assets/images/red-flag.svg'
import optionsMenu from '../../assets/images/options-menu.svg'
import Title from "../../components/ui/Typography/Title"
import addIcon from "../../assets/images/add.svg"

import downArrow from "../../assets/images/down-arrow.svg"
import upArrow from "../../assets/images/up-arrow.svg"
import bicycle from "../../assets/images/bicycle.svg"
import bag from "../../assets/images/bag.svg"

const Batched = () => {
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
                <button className="dashboard-red-button">
                    <img className="add-icon" src={addIcon.src} />
                    <p>Create New Batch</p>
                </button>
                <NotificationText className="highlight-text">2 batched orders </NotificationText>
            </div>
            <div className="card-elevated">
                <div className="display-flex">
                    <p>Batch 2</p>
                    <p>#C267</p>
                    <img src={optionsMenu.src} />
                </div>
                <div className="order-section display-flex-withoutspace">
                    <img src={bag.src} />
                    <p className="orders-notification">3 orders</p>
                </div>
                <div className={"display-flex"}>
                    <div className="display-flex-withoutspace">
                        <img src={bicycle.src} />
                        <p className="orders-notification">Timi Busola</p>
                    </div>
                    <img src={downArrow.src} />
                    {/* <img src={upArrow.src} /> */}
                </div>
                <div className="order-row">
                    <div className="order-number">
                        <p>Order 4</p>
                        <p>#1270</p>
                    </div>
                    <p className="badge"> Package </p>
                </div>
            </div>
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
