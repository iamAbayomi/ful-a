import { Button, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import Bag from "../../components/icons/Bag"
import KebabMenu from "../../components/icons/KebabMenu"
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
                <MenuButton 
                    as={IconButton} 
                    // rightIcon={<KebabMenu/>}
                    colorScheme='white'
                    icon={<KebabMenu/>}
                />    
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}

export default index