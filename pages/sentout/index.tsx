import styled from "styled-components"
import Layout from "../../components/Layouts/DashboardLayout"
import Search from "../../components/ui/Search/input"
import SentOutOrdersCard from "../../components/ui/SentOutOrdersCard"


const SentOut = () => {
    return(
        <Layout title="Sent Out Orders" headElements={<Search/>}>
            <SentOutContainer>
                {[1,2,3,4,5,6].map((item: any) => (
                    <SentOutOrdersCard />  
                ))}
            </SentOutContainer>
        </Layout>
    )
}

export default SentOut

const SentOutContainer = styled.div`
    margin: 140px 0px 0px;
    padding: 0px 0px 20px;
`