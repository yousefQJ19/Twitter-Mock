import {Flex} from "@chakra-ui/react"
import { Outlet } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";

function AuthDashBoard() {
    return ( 
        <Flex h={"100vh"}
              justifyContent={"space-around"}
              alignItems={"center"}>

                <BsTwitterX  size={600} />
                <Outlet/>

        </Flex>
    );
}

export default AuthDashBoard;