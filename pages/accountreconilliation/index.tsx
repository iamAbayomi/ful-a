import { Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import {Image} from '@chakra-ui/react'
import styled from "styled-components"
import OrderDescription from "../../components/ui/OrderDescription"
import ReconcileMoney from "../../components/ui/ReconcileMoney"
import ModalContainer from "../../components/ui/Modals/ModalContainer"
import ModalLayout from "../../components/Layouts/ModalLayout"
import CashReconciliation from "../../components/ui/CashReconcillation"
import { useRouter } from "next/router"

const AccountReconcilliation = () => {
    const router = useRouter()
    const {isOpen, onOpen, onClose } = useDisclosure()
    const [reconileAccountStep, setReconcileAccountStep] = useState<any>(1)
    useEffect(()=> {
        onOpen()
    })

    return(
        <ModalLayout isOpen={isOpen} onClick={() => {router.push("/dashboard")}}   onClose={onClose}>
            {
                reconileAccountStep == 1 ? <ReconcileMoney onClick={() => {setReconcileAccountStep(2)}} /> : 
                <CashReconciliation 
                    showErrorState={reconileAccountStep == 3 ? true : false} 
                    onClick={() => {setReconcileAccountStep(reconileAccountStep == 2 ? 3: 1)}}
                     /> 
            }
        </ModalLayout>
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
