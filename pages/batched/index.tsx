import styled from "styled-components"
import Layout from "../../components/Layouts/DashboardLayout"
import redflag from '../../assets/images/red-flag.svg'
import optionsMenu from '../../assets/images/options-menu.svg'
import Title from "../../components/ui/Typography/Title"

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
                {/* <div className='icon-container'>
                    <img
                        className='app-logo'
                        src={optionsMenu.src}
                    />
                </div> */}
            </div>
        </Header>
        <NotificationText className="highlight-text">22 New Orders </NotificationText>
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
    padding: 10px 30px 0px;
`
