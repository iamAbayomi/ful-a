import styled from "styled-components"
import Layout from "../../components/Layouts/DashboardLayout"
import BatchedOrderCard from "../../components/ui/BatchedOrderCard"
import Search from "../../components/ui/Search/input"
import SentOutOrdersCard from "../../components/ui/SentOutOrdersCard"

const SentOutHeaderElements = () => {
    return(
        <div>
            <Search placeholder={"Search Order"}/>
            <p className="highlight-text">12 sent out bathces </p>
        </div>
    )
}

const SentOut = () => {
    return(
        <Layout title="Sent Out Orders" headElements={<SentOutHeaderElements />}>
            <SentOutContainer>
                {[1,2,3,4,5,6].map((item: any) => (
                    <BatchedOrderCard />  
                ))}
            </SentOutContainer>
        </Layout>
    )
}

export default SentOut

const SentOutContainer = styled.div`
    margin: 140px 0px 0px;
    padding: 20px 0px 20px;
`