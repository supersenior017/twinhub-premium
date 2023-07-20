import React from "react"
import {
    useDisclosure,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogCloseButton,
    AlertDialogBody,
    AlertDialogHeader,
    AlertDialogFooter,
    Button
} from "@chakra-ui/react"

const Confirmation = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    return (
        <>
            {/* // <AlertDialog
        //     motionPreset="slideInBottom"
        //     leastDestructiveRef={cancelRef}
        //     onClose={onClose}
        //     isOpen={isOpen}
        //     isCentered
        // >
        //     <AlertDialogOverlay />

        //     <AlertDialogContent>
        //         <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
        //         <AlertDialogCloseButton />
        //         <AlertDialogBody>
        //             Are you sure you want to discard all of your notes? 44 words
        //             will be deleted.
        //         </AlertDialogBody>
        //         <AlertDialogFooter>
        //             <Button onClick={onClose}>No</Button>
        //             <Button colorScheme="red" ml={3}>
        //                 Yes
        //             </Button>
        //         </AlertDialogFooter>
        //     </AlertDialogContent>
        // </AlertDialog> */}
        </>
    )
}
