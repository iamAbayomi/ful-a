import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import Bag from "../../components/icons/Bag"
import BackDrop from "../../components/ui/BackDrop"
import BatchedOrderDetails from "../../components/ui/BatchedOrderDetails"
import ConfirmBatch from "../../components/ui/ConfirmBatch"
import Modal from "../../components/ui/Modal"
import OrderDescription from "../../components/ui/OrderDescription"

const index = () => {
    return(
        <div className="main dashboard">
            {/* <BatchedOrderDetails /> */}
            {/* <BackDrop /> */}
            {/* <Modal /> */}
            {/* <OrderDescription /> */}
            {/* <ConfirmBatch /> */}
            <Menu>
                <MenuButton as={Button} rightIcon={<Bag/>}>
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}

export default index