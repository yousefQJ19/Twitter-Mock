import { Flex,Text,Box} from "@chakra-ui/react"
import { FaArrowLeft } from "react-icons/fa6";


function ProfileNav() {
    return ( 
        <Flex bg={"black"} 
             w={"100%"}
             alignItems={"center"}
             gap={4}
             position={"sticky"}
             top={0}
             opacity={.9}
             zIndex={2}
             p={2} 
             >
            <Box pl={2}>
                <FaArrowLeft size={25}  />
            </Box>
            
            <Flex flexDir={"column"} gap={0}>
                <Text >
                    Yousef Samara
                </Text>

                <Text  
                      fontSize={"small"} 
                      fontWeight={"bold"}>
                        90 post
                </Text>
            </Flex>
          
        </Flex>
     );
}

export default ProfileNav;