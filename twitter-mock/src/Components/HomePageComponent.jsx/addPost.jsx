import {Image,Text, Flex, Button} from "@chakra-ui/react"
import IconList from "./iconList";
import { useState } from "react";
function AddPost() {
    const[display,setDisplay]= useState(false)
    return ( 
        <Flex p={2} 
              borderBottom={"1px solid gray"}
              onClick={() => setDisplay(true)}>
            <Flex flexDirection={"column"} px={2}>
            <Image w={"40px"} h={"40px"} src={"/profile-3.png"} borderRadius={"50px"} display={"block"}/>
            </Flex>

            <Flex flexDirection={"column"} 
                  w={"100%"} 
                  gap={8} >

                <Text color={"gray"} 
                      fontSize={"20px"}>
                        what is happening
                </Text>
                
                <Text display={display?"block":"none"}
                      color={"blue.500"}>
                        Every one can replay
                </Text>
                <Flex justifyContent={"space-between"} 
                      borderTop={display? ".5px solid gray":"0px"} 
                      alignItems={"center"}>

                    <IconList/>

                    <Button bg={"blue.500"}
                            w={"100px"}
                            borderRadius={"20px"}
                            >Post</Button>
                </Flex>
                
            </Flex>
            
        </Flex>
    );
}

export default AddPost;