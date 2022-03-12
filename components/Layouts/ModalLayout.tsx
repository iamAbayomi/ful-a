import { Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { ReactNode, useEffect } from "react"

type props = {
    modalContents?: any,
    isOpen?: any,
    onOpen?: any,
    onClose?: any,
    children: ReactNode,
    onClick ?: () => void
}

const ModalLayout = ({modalContents, isOpen,onClick  ,onOpen, onClose, children} : props) => (
        <Modal onOverlayClick={onClick } isOpen= {isOpen} onClose = {onClose} >
            <ModalOverlay />
            <ModalContent w={"370px"} p={[0,0,0,0]} borderRadius={"10px"} >
                <ModalBody w={"370px"} p={[0,0,0,0]}>
                    {/* {modalContents} */}
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )


export default ModalLayout