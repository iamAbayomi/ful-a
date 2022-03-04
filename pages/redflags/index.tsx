import styled from "styled-components"
import Layout from "../../components/Layouts/DashboardLayout"
import RedFlagCard from "../../components/ui/RedFlagOrder"
import filter from "../../assets/images/filter.svg"
import downArrow from "../../assets/images/down-arrow.svg"
import Title from "../../components/ui/Typography/Title"

const HeaderElements = () => {
    return (
        <div>
            <Header>
                <div className="display-flex">
                    <HeaderNormalText className="body-normal-text">FOR TODAY</HeaderNormalText>
                    <img src={downArrow.src} />
                </div>
                <p className="neworderno">3 red flags</p>
            </Header>
            <RedFlagMenu>
                <img src={filter.src} />
                <RedFlagMenuContents className="red-flag-menu">
                    <p className="menu-heading active">All</p>
                    <p className="menu-heading ">Delayed</p>
                    <p className="menu-heading">Postponed</p>
                    <p className="menu-heading">Cancelled</p>
                </RedFlagMenuContents>
            </RedFlagMenu>
        </div>
    )
}

const RedFlag =() => {
    return(
        <Layout title="Red Flags" headElements={<HeaderElements />}>
            <div>
                <div>
                    {
                        [1,2,3,5,,4,66].map((item) => {
                            return <RedFlagCard />
                        })
                    
                    }
                </div>
            </div>
        </Layout>
    )
}

export default RedFlag


const Header = styled.div`

`

const HeaderNormalText = styled.p`
    margin: 16px 0px 21px;
`

const RedFlagMenu = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 35px 0px;
`

const RedFlagMenuContents = styled.div`
    display: flex;
    justify-content: space-between;
    border: none;
    border-bottom: 0.5px solid #8F92A1;
`