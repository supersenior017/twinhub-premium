import {
    Box,
    Container,
    Flex,
    Heading,
    InputGroup,
    InputLeftElement,
    IconButton,
    Stack,
    Text,
    Input,
    CircularProgress,
    Center
} from "@chakra-ui/react"
import UserCard from "./Components/UserCard"
import { useContext, useEffect, useState } from "react"
import { SearchIcon } from "@chakra-ui/icons"
import { AppContext, BackendUrl, personaProps } from "../../constants"
import Loader from "components/Loader"
import { Present } from "../../components/Confirmation"

const Dashboard = () => {
    const [search, setSearch] = useState("")

    const contextData = useContext(AppContext)
    console.log("isAuth: ", contextData?.isAuthorized)
    const personas = contextData?.personas
    const showPresent = contextData?.showPresent

    return (
        <>
            <Box p={4} mt={"80px"} color={"#FFF"}>
                <Stack
                    spacing={4}
                    as={Container}
                    maxW={"3xl"}
                    textAlign={"center"}
                >
                    <Heading
                        fontSize={{ base: "2xl", sm: "4xl" }}
                        fontWeight={"bold"}
                    >
                        Who do you want to call?
                    </Heading>
                    <Flex
                        alignItems={"center"}
                        gap={"10px"}
                        justifyContent={"center"}
                        flexDirection={{
                            sm: "column",
                            md: "row"
                        }}
                    >
                        <Text
                            color={"#FFB7EB"}
                            fontSize={{ base: "sm", sm: "lg" }}
                        >
                            Search your favorite persona
                        </Text>
                        <InputGroup
                            cursor="pointer"
                            bg={"#AE3E7A"}
                            borderRadius="15px"
                            borderColor="#F178B8"
                            w={{
                                sm: "80%",
                                md: "256px"
                            }}
                            mx={{ sm: "auto", md: "inherit" }}
                            me={{ sm: "auto", md: "20px" }}
                        >
                            <InputLeftElement
                                children={
                                    <SearchIcon
                                        color={"#FFF"}
                                        w="15px"
                                        h="15px"
                                    />
                                }
                            />
                            <Input
                                fontSize="xs"
                                py="11px"
                                color={"gray.400"}
                                placeholder="Type here..."
                                borderRadius="inherit"
                                value={search}
                                onChange={(el) => setSearch(el.target.value)}
                                _placeholder={{
                                    color: "rgba(255, 255, 255, 0.60)"
                                }}
                            />
                        </InputGroup>
                    </Flex>
                </Stack>
                <Container
                    maxW={{
                        base: "100%",
                        lg: "80%",
                        "2xl": "60%"
                    }}
                    mt={12}
                >
                    <Flex flexWrap="wrap" gridGap={"6px"} justify="center">
                        {personas
                            ?.filter((val) =>
                                val.name.toLowerCase().includes(search)
                            )
                            ?.map((el, key) => (
                                <UserCard key={`${key}`} {...el} />
                            ))}
                    </Flex>
                </Container>
            </Box>
            {showPresent && <Present />}
        </>
    )
}

export default Dashboard
