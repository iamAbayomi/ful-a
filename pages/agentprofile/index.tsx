import Layout from "../../components/Layouts/DashboardLayout"
import Title from "../../components/ui/Typography/Title"

const AgentProfile =() => {
    return (
        <Layout title="Agent">
            <div>
                <p>Oluwabumi Akinjide</p>
                <p>#A4650</p>
            </div>
            <div>
                <p>FOR TODAY</p>
                <div className="riders-card">
                    <p>Online Riders</p>
                    <div>
                        <p>20</p>
                        <img src="" />
                    </div>
                </div>
                <p>Change Password</p>
            </div>
        </Layout>
    )
}

export default AgentProfile