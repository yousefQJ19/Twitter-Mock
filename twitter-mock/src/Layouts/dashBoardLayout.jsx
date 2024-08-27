import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import LeftList from "../Components/LeftList";
import RightList from "../Components/RightList";

function HomePageLayout() {
    return ( 
        <Flex  
                m={"0 auto"}
                w={"1400px"}
                >

            <Box 
                 flex={1} 
                 >
                <LeftList/> 
            </Box>

            <Box flex={1.9} borderRight={"1px solid gray"}>
                <Outlet/>   
            </Box>

            <Box 
                  flex={1} 
                  mx={5} 
                  p={4} >
                <RightList/>
            </Box>
            
        </Flex>
        
    );
}

export default HomePageLayout;