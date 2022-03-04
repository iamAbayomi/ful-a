import styled from "styled-components"
import Layout from "../../components/Layouts/DashboardLayout"
import AgentOderCard from "../../components/ui/AgentOrderCard"
import FilterDateComponent from "../../components/ui/FilterDateComponent"
import Title from "../../components/ui/Typography/Title"
import { agentOrderData } from "../../utils/sample-data"

const AgentProfile =() => {
    return (
        <Layout title="Agent">
            <Container>
                <div>
                    <p className="normal-text">Oluwabumi Akinjide</p>
                    <p className="highlight-text">#A4650</p>
                </div>
                <FilterDateComponent />
                <AgentCardSection>
                    
                    {
                        agentOrderData.map((item) => (
                            <AgentOderCard 
                                agentCardNo={item.agentOrdeNo} 
                                agentCardImg={item.agentOderImage} 
                                agentCardTitle={item.agentOrderTitle}
                                agentCardBackground={item.backgroundColor} />        
                    ))}
                </AgentCardSection>
                <div className="line"></div>
                <Text>Change Password</Text>
            </Container>
        </Layout>
    )
}

export default AgentProfile

const AgentCardSection = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    margin: 0px 0px 30px;
`


const Text = styled.p`
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 19px;
    /* identical to box height */
    /* primary color */
    padding: 40px 0px;
    color: #FF1B03;
`


const Container = styled.div`
    background: #F6F5F5;
`