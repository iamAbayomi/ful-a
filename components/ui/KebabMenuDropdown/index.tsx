import { Button, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import KebabMenu from "../../icons/KebabMenu"
const KebabMenuDropdown = ()  => {
    return(
        <Menu>
            <MenuButton 
                as={IconButton} 
                // rightIcon={<KebabMenu/>}
                colorScheme='white'
                icon={<KebabMenu/>}
            />    
            <MenuList>
                <MenuItem>Select</MenuItem>
                <MenuItem>Auto Batch Order</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default KebabMenuDropdown