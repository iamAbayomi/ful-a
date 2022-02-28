import Layout from "../../components/Layouts/DashboardLayout"
import SentOutOrdersCard from "../../components/ui/SentOutOrdersCard"
const SentOut = () => {
    return(
        <Layout title="Sent Out Orders">
            {[1,2,3,4,5,6].map((item: any) => (
                <SentOutOrdersCard />  
            ))}
        </Layout>
    )
}

export default SentOut