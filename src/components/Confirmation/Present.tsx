import React, { RefObject, useContext, useEffect } from "react"
import {
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
    ModalBody,
    Text,
    Button,
    Image
} from "@chakra-ui/react"
import present_img from "../../assets/img/present.png"
import { AppContext } from "../../constants"

export const Present = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => onOpen(), [])

    console.log("confirm render")
    const contextData = useContext(AppContext)
    const setShowPresent = contextData?.setShowPresent

    const handleClose = () => {
        onClose()
        setShowPresent && setShowPresent(false)
    }

    return (
        <>
            <Modal
                isCentered
                isOpen={isOpen}
                onClose={handleClose}
                scrollBehavior="inside"
            >
                <ModalOverlay
                    bg="blackAlpha.300"
                    backdropFilter="blur(10px) hue-rotate(10deg)"
                />

                <ModalContent bg={"#F0A9CF"} borderRadius={"20px"} px={"22px"}>
                    <ModalHeader pt={"0 !important"}>
                        <Image
                            src={present_img}
                            alt="present"
                            boxSize={"142px"}
                            mx={"auto"}
                            mt={"-50px"}
                        />
                    </ModalHeader>
                    <ModalBody textAlign={"center"}>
                        <Text
                            color={"#AF3875"}
                            fontSize={"18px"}
                            fontWeight={700}
                        >
                            Thanks for signing up with us at TwinHub! We just
                            deposited 1 minute of FREE trial time for you, start
                            chatting now!
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            bg={
                                "linear-gradient(0deg, #E32D79 0%, #E32D79 100%), #2E41EC !important"
                            }
                            borderRadius={"10px"}
                            width={"full"}
                            onClick={handleClose}
                            border="none"
                        >
                            Start my 1 minute free trial
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
