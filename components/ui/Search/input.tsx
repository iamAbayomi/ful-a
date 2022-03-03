import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/layout"
import SearchIcon from "../../icons/Search"
import styled from "@emotion/styled"

const Search = () => {
    return(
        <SearchContainer>
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
        </SearchContainer>
    )
}

export default Search

const SearchContainer = styled.div`
    margin: 10px 0px;
`