import { Button, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import KebabMenu from "../../icons/KebabMenu"

type props = {
    menuItems: string [],
    menuItemMethod: (item: any) =>  void
}
//['Select', 'Auto Batch Order']
const KebabMenuDropdown = ({ menuItems, menuItemMethod } : props)  => {
    
    
    return(
        <Menu>
            <MenuButton 
                as={IconButton} 
                colorScheme='white'
                icon={<KebabMenu/>}
            />    
            <MenuList>
                {
                    menuItems.map((item: any) => {
                        <MenuItem onClick={() => menuItemMethod(item)}></MenuItem>
                    })
                }
            </MenuList>
        </Menu>
    )
}

export default KebabMenuDropdown