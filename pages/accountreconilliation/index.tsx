import { Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useEffect } from "react"
import {Image} from '@chakra-ui/react'
import styled from "styled-components"
import OrderDescription from "../../components/ui/OrderDescription"
import ReconcileMoney from "../../components/ui/ReconcileMoney"
import ModalContainer from "../../components/ui/Modals/ModalContainer"

const AccountReconcilliation = () => {
    const {isOpen, onOpen, onClose } = useDisclosure()

    useEffect(()=> {
        onOpen()
    })

    return(
        
        <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent w={"370px"} p={[0,0,0,0]} borderRadius={"10px"} >
                    <ModalBody w={"370px"} p={[0,0,0,0]}>
                        {/* <ModalContainer closeMethod={onClose} /> */}
                        <ReconcileMoney/>
                    </ModalBody>
                </ModalContent>
        </Modal>
    )
}

export default AccountReconcilliation


const Container = styled.div`
    max-width: 300px;
    margin: 20px auto;
`


const Text = styled.div`
    font-family: Mulish;
    font-style: normal;
    font-size: 16px;
    font-weight: 600;
    /* line-height: 30px; */
    clear: both;
    margin: 10px auto 0px;
    text-align: center;
    color: #092443;
    max-width: 180px;
`
