import React from "react"
import { Flex } from "@chakra-ui/react"

const GradientBorder = (props) => {
    const { variant, children, ...rest } = props
    return (
        <Flex
            p="2px"
            justify="center"
            align="center"
            bg="radial-gradient(69.43% 69.43% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%),
      radial-gradient(60% 51.57% at 50% 50%, #FA9BCB 0%, rgba(88, 44, 255, 0) 100%),
      radial-gradient(54.8% 53% at 50% 50%, #9D2D65 0%, rgba(21, 21, 21, 0) 100%)"
            {...rest}
        >
            {children}
        </Flex>
    )
}

export default GradientBorder
