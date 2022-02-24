import CheckboxSelectedComponent from "../CheckboxSelectedComponent"
import NewOrderCard from "../NewOrderCard"

const BackDrop = () =>{
    return (
        <div>
            <div className="main backdropdown">
                <div className="border-line"></div>
                <p>Select Order</p>
                <CheckboxSelectedComponent />
                <NewOrderCard />
            </div>
        </div>
    )
}

export default BackDrop