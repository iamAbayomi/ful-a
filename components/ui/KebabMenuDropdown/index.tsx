import { Button, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import KebabMenu from "../../icons/KebabMenu"

type props = {
    menuItems: string [],
    menuItemMethod: (item: any) =>  void
}

const KebabMenuDropdown = ({ menuItems, menuItemMethod } : props)  => {
    
    
    return(
        <Menu>
            <MenuButton 
                as={IconButton} 
                colorScheme='white'
                icon={<KebabMenu/>}
            />    
            <MenuList>
                {menuItems.map((item: any) => {
                        return <MenuItem  onClick={() => menuItemMethod(item)}>{item}</MenuItem>
                    })
                }
            </MenuList>
        </Menu>
    )
}

export default KebabMenuDropdown