import redFlag from "../../assets/images/red-flag.svg"
import DashboardMenuItem from "../../components/ui/DashbordMenuITem"
import styled from "styled-components"
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'




const Dashboard = () => {
    return (
        <Container>
            <Header>
                <PageTitle>Dashboard</PageTitle>
            </Header>
            <div className="">
                <DashboardMenuItem menuItemImage={redFlag.src} menuItemTitle={"Red Flags"} menuUrl={"/redflags"} />
                <DashboardMenuItem menuItemImage={""} menuItemTitle={"Products"} />
                <DashboardMenuItem menuItemImage={""} menuItemTitle={"New Arrivals"} />
                <DashboardMenuItem menuItemImage={""} menuItemTitle={"Request Products"} />
                <DashboardMenuItem menuItemImage={""} menuItemTitle={"Money Flow"}/>
                <DashboardMenuItem menuItemImage={""} menuItemTitle={"Account Reconcilliation"} />
                <DashboardMenuItem menuItemImage={""} menuItemTitle={"Riders"} menuUrl="/riders" />
                <DashboardMenuItem menuItemImage={""} menuItemTitle={"Agent Profile"} menuUrl="/agentprofile" />
            </div>
            <SliderContainer>
                <Slider aria-label='slider-ex-1' size={"lg"} >
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb width={"25px"} height={"25px"}  />
                </Slider>
            </SliderContainer>
            
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

const SliderContainer= styled.p`
    margin: 40px 0px;
    max-width: 50px;
`