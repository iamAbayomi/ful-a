import { Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useEffect } from "react"
import {Image} from '@chakra-ui/react'
import styled from "styled-components"
import OrderDescription from "../../components/ui/OrderDescription"
import ReconcileMoney from "../../components/ui/ReconcileMoney"

const AccountReconcilliation = () => {
    const {isOpen, onOpen, onClose } = useDisclosure()

    useEffect(()=> {
        onOpen()
    })

    return(
        
        <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent w={"300px"} p={[0,0,0,0]} >
                    <ModalBody w={"300px"} >
                    <Container className="card-div">
                        <Image 
                            src={"/close-button.svg"}
                            style={{float: "right"}}
                            onClick={onClose}
                        />
                        <Image 
                            src="/check.svg"
                            className="check-image"
                        />
                        <Text>Are you done fufiling orders for that day</Text>
                        <button className="button-red">Yes! I'm done</button>
                        <button className="button-white">No, going for a short break</button>
                    </Container>
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
