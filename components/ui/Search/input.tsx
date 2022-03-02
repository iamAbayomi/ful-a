import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/layout"
import SearchIcon from "../../icons/Search"

const Search = () => {
    return(
        <Stack spacing={4}>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents = 'none'
                        children= {<SearchIcon />}
                    />
                    <Input 
                        borderWidth={'2px'} 
                        borderColor={"#8f92a152"}
                        focusBorderColor="gray.300" 
                        placeholder="Search Order"  
                    />
                    <InputRightElement
                        pointerEvents={"none"}
                        children={<></>}
                    />
                </InputGroup>
        </Stack>
    )
}

export default Search