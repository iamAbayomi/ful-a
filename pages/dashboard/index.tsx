import redFlag from "../../assets/images/redflag.svg"
import document from "../../assets/images/document.svg"
import profile from "../../assets/images/profile.svg"
import wallet from "../../assets/images/wallet.svg"
import riders from "../../assets/images/bicycle.svg"
import closeButton from "../../assets/images/close-button.svg"
import DashboardMenuItem from "../../components/ui/DashbordMenuITem"
import styled from "styled-components"
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'
import Bicycle from "../../components/icons/Bicycle"
import { useRouter } from "next/router"






const Dashboard = () => {
    const router = useRouter()
    function goBack(){
        router.back()
    }
    return (
        <Container>
            <Header>
                <PageTitle>Dashboard</PageTitle>
                <img src={closeButton.src} onClick={goBack} />
            </Header>
            <div className="">
                <DashboardMenuItem menuItemImage={redFlag.src} menuItemTitle={"Red Flags"} menuUrl={"/redflags"} />
                <DashboardMenuItem menuItemImage={document.src} menuItemTitle={"Products"} />
                <DashboardMenuItem menuItemImage={document.src} menuItemTitle={"New Arrivals"} />
                <DashboardMenuItem menuItemImage={profile.src} menuItemTitle={"Request Products"} />
                <DashboardMenuItem menuItemImage={wallet.src} menuItemTitle={"Money Flow"}/>
                <DashboardMenuItem menuItemImage={document.src} menuItemTitle={"Account Reconcilliation"} />
                <DashboardMenuItem menuItemImage={riders.src} menuItemTitle={"Riders"} menuUrl="/riders" />
                <DashboardMenuItem menuItemImage={profile.src} menuItemTitle={"Agent Profile"} menuUrl="/agentprofile" />
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
    display: flex;
    justify-content: space-between;
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