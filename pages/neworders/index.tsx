import styled from "styled-components";
import Layout from "../../components/Layouts/NewOrders";
import NewOrderCard from "../../components/ui/NewOrderCard";

const NewOrders = () => (
    <Layout title="New Orders">
        <NewOrderContainer >
            <NewOrderCard />
            <NewOrderCard />
            <NewOrderCard />
            <NewOrderCard />
            <NewOrderCard />
        </NewOrderContainer>
    </Layout>
)

export default NewOrders

const NewOrderContainer = styled.p`
   margin: 20px;
`