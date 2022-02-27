import { Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React, { useState } from "react"
import './Modal.css'
type props= {
    children: any
}

const Modals = ( {children} : props ) => {
    const {isOpen, onOpen, onClose } = useDisclosure()

    return(
        <>  
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        {children}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Modals


