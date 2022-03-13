import { useDisclosure } from "@chakra-ui/react"
import { useEffect } from "react"
import ModalLayout from "../../components/Layouts/ModalLayout"
import BackDrop from "../../components/ui/BackDrop"

const SelectOrder = () =>{
    const {onOpen, isOpen} = useDisclosure()
    useEffect(()=> {
        onOpen()
    })
    return(
        <ModalLayout isOpen={isOpen}>
            <BackDrop />
        </ModalLayout>
    )
}

export default SelectOrder