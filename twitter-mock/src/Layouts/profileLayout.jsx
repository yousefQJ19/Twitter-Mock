import { Outlet } from "react-router-dom";
import ProfileNav from "../Components/ProfileComponent/profileNav";
import { Flex,Text,Box,Image, Button, Stack,Tabs,TabList,Tab } from "@chakra-ui/react";
import { SlCalender } from "react-icons/sl";


function ProfileLayout() {
    return ( 
        <Box >
            <ProfileNav/>

            <Image src="/profileback-1.jpeg" 
                    width={"100%"} 
                    h={"250px"}/>

            <Flex justifyContent={"space-between"} h={"60px"}  >
                <Image src="/girl-1.jpeg" 
                    width={"140px"} 
                    h={"140px"}
                    ml={3} 
                    borderRadius={"50%"}
                    border={"2px solid black"}
                    transform={"translate(0 ,-50%)"}/>
                <Button m={3} >Edit profile</Button>
            </Flex>
            
            <Stack
                 p={5}
                 gap={2}>
                <Box>
                    <Text>Yousef Samara</Text>
                    <Text color={"lightgray"} fontWeight={"light"}>yousefxnsa</Text>
                </Box>
                
                <Text >i am the hero</Text>
                <Flex gap={2}
                      alignItems={"center"}>
                    <SlCalender/>
                    <Text color={"lightgray"}type>Joined October 2019</Text>
                </Flex>
                

                <Flex gap={8} 
                      color={"lightgray"}>
                    <Text >
                        <Text as={"span"} 
                              fontWeight={"bold"}
                              pr={2}>
                            59
                        </Text> 
                        following
                    </Text>
                    <Text>
                        <Text as={"span"} 
                              fontWeight={"bold"}
                              pr={2}>
                            120
                        </Text> 
                        followers
                    </Text>
                </Flex>

            </Stack>
            <Tabs>
                <TabList>
                    <Tab w={"25%"}>Post</Tab>
                    <Tab w={"25%"}>Replay</Tab>
                    <Tab w={"25%"}>Media</Tab>
                    <Tab w={"25%"}>Likes</Tab>
                </TabList>
            </Tabs>
            <Outlet/>
        </Box>
    );
}

export default ProfileLayout;