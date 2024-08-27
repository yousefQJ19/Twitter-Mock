import {Tabs,TabList,Tab, Box, Stack} from "@chakra-ui/react"
import {NavLink} from "react-router-dom"

import AddPost from "../Components/HomePageComponent.jsx/addPost";
import Post from "../Components/HomePageComponent.jsx/post";
// import { useEffect,useState } from "react";
// import { supabase } from "../utility/config";

function HomePage() {
   
    // const [posts,setPost] =useState(null)
    // const [isLoading,setIsLoading]=useState(true)
    
    
    // useEffect(()=>{
    //     async function getPost() {
    //         const {data,error}=await supabase.from('Posts').select()
    //         setPost(data)
    //         setIsLoading(false)
    //         console.log(data)
    //         console.log(error)
    //     }
        
    //     getPost()

    // },[])
    // if (isLoading){
    //     return (<h1>loading</h1>)
    // }
    return (
        <Box>
            
                
                <Tabs variant='enclosed'
                        isFitted 
                        position={"sticky"}
                        top={0}
                        zIndex={"2"}
                        bg={"black"} 
                        borderBottomColor={"gray"}
                        alignItems={"center"}>
                <TabList borderX={"1px solid gray"} >
                    <Tab  as={NavLink} 
                            to={"#"} 
                            color={"white"}>
                                Following
                    </Tab>
                    <Tab as={NavLink} 
                        to={"#"} 
                        color={"white"}>
                            For You
                    </Tab>
                </TabList>
                </Tabs>
            
            <Box>
                <AddPost />
            </Box>
            <Stack h={"200000px"} >
                {/* {
                    posts.map(post=>(
                        <Text color={"white"} key={post.id}>{post.body}</Text>
                    ))
                } */}
                
                <Post/>
            
            </Stack>
        </Box>
        
        
    );
}

export default HomePage;