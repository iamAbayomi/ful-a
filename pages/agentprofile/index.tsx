import Layout from "../../components/Layouts/DashboardLayout"
import FilterDateComponent from "../../components/ui/FilterDateComponent"
import Title from "../../components/ui/Typography/Title"

const AgentProfile =() => {
    return (
        <Layout title="Agent">
            <div>
                <p>Oluwabumi Akinjide</p>
                <p>#A4650</p>
            </div>
            <div>
                <FilterDateComponent />
                <div className="riders-card">
                    <p>Online Riders</p>
                    <div>
                        <p>50</p>
                        <div>Orders Taken</div>
                        <img src="" />
                    </div>
                </div>
                <p>Change Password</p>
            </div>
        </Layout>
    )
}

export default AgentProfile