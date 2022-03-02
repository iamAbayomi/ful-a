import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
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
                    />#8F92A1
                </InputGroup>
        </Stack>
    )
}

export default Search