/* eslint-disable react/prop-types */
import { Button, Flex,Image,Text} from "@chakra-ui/react"

function Post({postData}) {
    console.log(postData)
    return ( 
        <Flex borderBottom={"1px solid gray"}
              p={"10px"}>
            
                <Image w={"35px"} 
                            h={"35px"} 
                            src={"/profile-3.png"}
                            borderRadius={"20px"}
                            />
                <Flex flexDir={"column"}
                      pl={2}
                      w={"100%"}>

                    <Text alignContent={"center"}
                          fontWeight={"bold"}>
                            {postData.profiles.user_name}
                    </Text>

                    <Text  overflow="hidden"  whiteSpace="normal" textOverflow="ellipsis" wordBreak="break-word">
                        {postData.body}
                    </Text>
                    <Flex mr={20} mt={3}>
                        <Button w={"50%"} bg={"black"} color={"white"} _hover={{bg:"blue.500"}} >like</Button>
                        <Button w={"50%"} bg={"black"} color={"white"} _hover={{bg :"blue.500"}} >Comment</Button>
                    </Flex>
                </Flex>
                
        </Flex>
        
    );
}

export default Post;