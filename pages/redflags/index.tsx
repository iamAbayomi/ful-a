import styled from "styled-components"
import Layout from "../../components/Layouts/DashboardLayout"
import RedFlagCard from "../../components/ui/RedFlagOrder"
import Title from "../../components/ui/Typography/Title"

const RedFlag =() => {
    return(
        <Layout>
            <div>
                <Header>
                    <Title text={"Red Flags"} />
                    <p>FOR TODAY</p>
                    <p>3 red flags</p>
                    <img src="" />
                </Header>
                <RedFlagMenu>
                    <img src="" />
                    <p>All</p>
                    <p>Delayed</p>
                    <p>Postponed</p>
                    <p>Cancelled</p>
                </RedFlagMenu>
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

`