import styled from "@emotion/styled"
import Layout from "../../components/Layouts/DashboardLayout"
import rightArrow from "../../assets/images/right-arrow.svg"

const HeadElements =() => {
    return (
         <AddNewRiderButton className="dashboard-red-button">Add New Rider</AddNewRiderButton>
    )
}

const Riders = () => {
    return(
        <Layout title="Riders" headIcon={<HeadElements />}>
            
            <div>
                <p>FOR TODAY</p>
                <img src="" />
            </div>
            <div>
                <div className="riders-card">
                    <p>Online Riders</p>
                    <div>
                        <p>20</p>
                        <img src="" />
                    </div>
                </div>
                <RidersSection>
                    <p>RIDERS LIST</p>
                    <div>
                        <img src={""} />
                        <p> Rider by name or ID</p>
                    </div>
                </RidersSection>
                <RidersTable>
                    <table style={{width: '100%'}}>
                        <tr>
                            <th><p>ID</p></th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>More Details</th>
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
            </div>
        </Layout>
    )
}


export default Riders

const AddNewRiderButton = styled.button`
    padding: 10px 20px 10px;
    margin: 50px 0px 20px;
`

const RidersSection = styled.div`

`

const RidersTable = styled.div`

`