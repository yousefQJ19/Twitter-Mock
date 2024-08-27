import { Flex,Image,Stack,Text} from "@chakra-ui/react"

function Post() {
    return ( 
        <Flex borderBottom={"1px solid gray"}
             p={"10px"}>
           
                <Image w={"35px"} 
                        h={"35px"} 
                        src={"/profile-3.png"}
                        borderRadius={"20px"}
                        />
            <Stack gap={0} pl={3}>
                <Text alignContent={"center"} 
                        color={"white"}>
                            Yousef Samara
                        
                </Text>
                <Text color={"white"}  overflow="hidden"  whiteSpace="normal" textOverflow="ellipsis" wordBreak="break-word">
                    The quick brown fox jumps over the lazy dog is an English-language pangram—a
                    sentence that contains all of the letters of the English alphabet. Owing to
                    its existence, Chakra was The quick brown fox jumps over the lazy dog is an English-language pangram—a
                    sentence that contains all of the letters of the English alphabet. Owing to
                    
                </Text>
            </Stack>
            
        </Flex>
        
    );
}

export default Post;