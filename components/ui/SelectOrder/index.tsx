import CheckboxSelectedComponent from "../CheckboxSelectedComponent"
import Modal from "../Modals"
import NewOrderCard from "../NewOrderCard"

const selectOrder = () => {
    return(
        <div className="main backdropdown">
                <div className="backdropdown-line"></div>
                <p className="backdropdown-text">Select Order</p>
                <CheckboxSelectedComponent />
                {[1,2,3,4,5].map(() => 
                    <NewOrderCard />
                )}
            </div>
    )
}

const SelectOrder = () =>{
    return (
        <div>
            {/* <Modal */}
        </div>
    )
}

export default SelectOrder