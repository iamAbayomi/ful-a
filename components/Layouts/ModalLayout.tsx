import { Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useEffect } from "react"

type props = {
    head: any
}

const ModalLayout = ({} : props) => {
    const {isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {

    })

    return(
        <Modal isOpen= {isOpen} onClose = {onClose} >
            <ModalOverlay />
            <ModalContent >
                <ModalBody >
                    <div/>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ModalLayout