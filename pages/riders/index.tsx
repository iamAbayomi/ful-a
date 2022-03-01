import styled from "@emotion/styled"
import DashbordLayout from "../../components/Layouts/DashboardLayout"
import rightArrow from "../../assets/images/right-arrow.svg"

const Riders = () => {
    return(
        <DashbordLayout title="Riders">
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
        </DashbordLayout>
    )
}


export default Riders


const RidersSection = styled.div`

`

const RidersTable = styled.div`

`