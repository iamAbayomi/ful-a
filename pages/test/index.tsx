
import Bag from "../../components/icons/Bag"
import KebabMenu from "../../components/icons/KebabMenu"
import BackDrop from "../../components/ui/BackDrop"
import BatchedOrderDetails from "../../components/ui/BatchedOrderDetails"
import ConfirmBatch from "../../components/ui/ConfirmBatch"
import Modal from "../../components/ui/Modals"
import OrderDescription from "../../components/ui/OrderDescription"

const index = () => {
    return(
        <div className="main dashboard">
            {/* <BatchedOrderDetails /> */}
            {/* <BackDrop /> */}
            {/* <Modal /> */}
            <OrderDescription onClick={undefined} />
            {/* <ConfirmBatch /> */}
            
        </div>
    )
}

export default index