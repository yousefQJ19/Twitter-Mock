import {Flex,Box} from "@chakra-ui/react"
import { Outlet } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";

function AuthDashBoard() {
    return ( 
        <Flex h={"100vh"}>
            <Box alignContent={"center"}
                 ml={"200px"}>
                <BsTwitterX color="white" size={600} />
            </Box>
            <Box>
            <Outlet/>
        </Box>
        </Flex>
       
     );
}

export default AuthDashBoard;