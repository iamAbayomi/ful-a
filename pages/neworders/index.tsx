import styled from "styled-components";
import Layout from "../../components/Layouts/NewOrders";
import NewOrderCard from "../../components/ui/NewOrderCard";

const NewOrders = () => (
    <Layout title="New Orders">
        <NewOrderContainer >
       { [1,2,3,4,3].map((item) => (<NewOrderCard />))}
            
        </NewOrderContainer>
    </Layout>
)

export default NewOrders

const NewOrderContainer = styled.p`
//    margin: 20px;
`