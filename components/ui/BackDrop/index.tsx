import CheckboxSelectedComponent from "../CheckboxSelectedComponent"
import NewOrderCard from "../NewOrderCard"

const BackDrop = () =>{
    return (
        <div>
            <div className="main backdropdown">
                <div className="backdropdown-line"></div>
                <p className="backdropdown-text">Select Order</p>
                <CheckboxSelectedComponent />
                {[1,2,3,4,5].map(() => 
                    <NewOrderCard />
                )}
            </div>
        </div>
    )
}

export default BackDrop