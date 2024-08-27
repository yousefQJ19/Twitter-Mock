import {Text,Flex} from "@chakra-ui/react"

function RightList() {

    return ( 
        <Flex   w={"100%"}
                h={"700px"}
                bg={"black"} 
                border ={"1px solid gray"}
                borderRadius={"20px"}
                mt={8}
                position={"sticky"}
                top={0}
                >
            <Text color="white">Right List </Text>
        </Flex>
    )
}

export default RightList;