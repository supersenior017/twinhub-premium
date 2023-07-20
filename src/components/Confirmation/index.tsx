import React, { RefObject, useEffect } from "react"
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
    Button
} from "@chakra-ui/react"

const Confirmation = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => onOpen(), [])

    console.log("confirm render")

    return (
        <>
            <Modal
                isCentered
                isOpen={isOpen}
                onClose={onClose}
                scrollBehavior="inside"
            >
                <ModalOverlay
                    bg="blackAlpha.300"
                    backdropFilter="blur(10px) hue-rotate(30deg)"
                />

                <ModalContent bg={"#340A21"} borderRadius={"20px"} px={"22px"}>
                    <ModalHeader textAlign={"center"} py={"30px"}>
                        <Text
                            fontSize={"26px"}
                            fontWeight={700}
                            background={
                                "linear-gradient(90deg, #4F56FA 0%, #FF5FBA 100%)"
                            }
                            backgroundClip={"text"}
                            css={{
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}
                        >
                            Warning 18+
                        </Text>
                    </ModalHeader>
                    <ModalBody textAlign={"center"}>
                        <Text color={"#FFF"}>
                            This site is for adults only!
                            <br />
                            It contains Al-generated adult content.
                        </Text>
                        <Text mt={"22px"} color={"#FFB7EB"}>
                            By entering this website, you confirm that you are
                            18 years old or more. By using the site, you agree
                            to our Terms of Service. Our privacy policy details
                            how we collect and use your data We use cookies for
                            basic analytics and spam detection.All content on
                            this website are Al-generated! Any generations that
                            resemble real people are purely coincidental.
                            <br />
                            <br />
                            We use cookies to give you the best possible
                            experience on our website. By continuing to browse,
                            you are consenting to our use of cookies. Enjoy your
                            visit!
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            bgColor={"#E32D79 !important"}
                            borderRadius={"18px"}
                            width={"full"}
                            onClick={onClose}
                        >
                            Agree and Continue
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Confirmation
