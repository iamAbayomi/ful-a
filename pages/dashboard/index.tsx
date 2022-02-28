import redFlag from "../../assets/images/red-flag.svg"
import DashboardMenuItem from "../../components/ui/DashbordMenuITem"
import styled from "styled-components"
import Title from "../../components/ui/Typography/Title"




const Dashboard = () => {
    return (
        <Container>
            <Header>
                <PageTitle>Dashboard</PageTitle>
            </Header>
            <div className="">
                <DashboardMenuItem menuItemImage={redFlag.src} menuItemTitle={"Red Flags"} />
                <DashboardMenuItem menuItemImage={""} menuItemTitle={"Products"} />
                <DashboardMenuItem menuItemImage={""} menuItemTitle={"New Arrivals"} />
                <DashboardMenuItem menuItemImage={""} menuItemTitle={"Request Products"} />
                <DashboardMenuItem menuItemImage={""} menuItemTitle={"Money Flow"}/>
                <DashboardMenuItem menuItemImage={""} menuItemTitle={"Account Reconcilliation"} />
                <DashboardMenuItem menuItemImage={""} menuItemTitle={"Riders"} />
                <DashboardMenuItem menuItemImage={""} menuItemTitle={"Agent Profile"} />

            </div>
        </Container>
    )
}

export default Dashboard

const Container = styled.div`
    max-width: 380px;
    margin: 0px auto 0px;
    background-color:  #F8F8F8;
    padding: 25px;
`

const Header = styled.div`
    margin: 30px 0px 20px;
`

const PageTitle = styled.p`
    font-weight: 800;
    font-size: 27px;
    line-height: 34px;
    /* identical to box height */
    /* Header txt color */
    color: #092443;
`