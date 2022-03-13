import styled from "@emotion/styled"
import Layout from "../../components/Layouts/DashboardLayout"
import rightArrow from "../../assets/images/right-arrow.svg"
import FilterDateComponent from "../../components/ui/FilterDateComponent"
import RidersCard from "../../components/ui/RidersCard"
import { sampleRiderData } from "../../utils/sample-data"
import Search from "../../components/ui/Search/input"



const HeadElements =() => {
    return (
         <AddNewRiderButton className="dashboard-red-button">Add New Rider</AddNewRiderButton>
    )
}

const Riders = () => {
    return(
        <Layout title="Riders" headIcon={<HeadElements />}>
            <Container>
                <FilterDateComponent />
                    <RidersCardSection>
                        { 
                        sampleRiderData.map((item) => (
                            <RidersCard 
                                ridersText={item.ridersSectionTitle} 
                                ridersNo={item.ridersNo} 
                                backgroundColor={item.backgroundColor}
                            />
                        )) 
                        }
                    </RidersCardSection>
                
                <RidersSection>
                    <RiderList className="body-normal-text">RIDERS LIST</RiderList>
                    <Search placeholder={"Rider by name or ID"} />
                </RidersSection>

                <RidersTable>
                    <table className="riders-table" style={{width: '100%'}}>
                        <tr>
                            <th className="riders-table-heading">ID</th>
                            <th className="riders-table-heading">Name</th>
                            <th className="riders-table-heading">Status</th>
                            <th className="riders-table-heading">More Details</th>
                        </tr>
                        <tr>
                            <td> #R2456 </td>
                            <td>Timi Daniels</td>
                            <td>Online</td>
                            <td><img style={{float: "right", marginRight: "10px"}} src={rightArrow.src}/></td>
                        </tr>
                        <tr>
                            <td> #R2456 </td>
                            <td>Jackson Samson</td>
                            <td>Online</td>
                            <td><img style={{float: "right", marginRight: "10px"}} src={rightArrow.src}/></td>
                        </tr>
                        <tr>
                            <td> #R2456 </td>
                            <td>Busola Badmus</td>
                            <td>Online</td>
                            <td><img style={{float: "right", marginRight: "10px"}} src={rightArrow.src}/></td>
                        </tr>
                    </table>
                </RidersTable>
            </Container>
        </Layout>
    )
}


export default Riders

const AddNewRiderButton = styled.button`
    padding: 10px 20px 10px;
    margin: 50px 0px 20px;
    border-radius: 10.4348px;
`

const RiderList = styled.div`
    margin: 20px 0px;
`

const RidersSection = styled.div`
    margin: 20px 0px 40px;
`

const RidersTable = styled.div`

`


const Container = styled.div`
    margin: 120px 0px;
    background: #F6F5F5;

`


const RidersCardSection = styled.div`
    display: grid;
    grid-template-columns: auto auto;

`