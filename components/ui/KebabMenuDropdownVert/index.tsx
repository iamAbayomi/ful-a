import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import KebabMenuVert from "../../icons/KebabMenuVert"

type props = {
    menuItems: string [],
    menuItemMethod: (item: any) => void
}


const KebabMenuDropdownVert = ({menuItems, menuItemMethod}: props) => {
    return(
        <Menu>
            <MenuButton
                as={IconButton}
                colorScheme="white"
                icon={<KebabMenuVert />}
            />
                <MenuList>
                    {
                        menuItems.map((item: any) => {
                            return <MenuItem onClick={() => menuItemMethod(item)}> {item} </MenuItem>
                        })
                    }
                </MenuList>
            
        </Menu>
    )
}

export default KebabMenuDropdownVert