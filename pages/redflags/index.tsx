import styled from "styled-components"
import Layout from "../../components/Layouts/DashboardLayout"
import RedFlagCard from "../../components/ui/RedFlagOrder"
import filter from "../../assets/images/filter.svg"
import Title from "../../components/ui/Typography/Title"

const HeaderElements = () => {
    return (
        <div>
            <Header>
                <p>FOR TODAY</p>
                <p className="neworderno">3 red flags</p>
            </Header>
            <RedFlagMenu>
                <img src={filter.src} />
                <p className="menu-heading">All</p>
                <p className="menu-heading">Delayed</p>
                <p className="menu-heading">Postponed</p>
                <p className="menu-heading">Cancelled</p>
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

const RedFlagMenu = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 35px 0px;
`