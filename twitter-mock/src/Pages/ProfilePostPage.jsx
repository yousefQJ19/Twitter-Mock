import {Flex} from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../utility/Context";
import { supabase } from '../utility/config';
import Post from "../Components/HomePageComponent.jsx/post"
function ProfilePage() {
    const {user} = useContext(AuthContext)
    const [posts,setPosts]=useState()
    const[isLoading,setIsLoading]=useState(true)

    useEffect(() => {
        async function getDate() {
            const { data, error } = await supabase
                .from('Posts')
                .select("id,created_at,body,profiles(user_name)")
                .eq('user_id', user.id);

                console.log(data)
                setIsLoading(false)
            if (error) {
                console.error('Error fetching data:', error);
            } else {
                console.log(data);
                setPosts(data)
            }
        }
    
        if (user.id) {
            getDate();
        }
    }, [user.id]);

    if (isLoading){
        return(
            <h1>loading</h1>
        )
    }


    return ( 
        <Flex flexDir={"column"}>
            {
                posts && posts.length > 0 ? (
                    posts.map(post => (
                        <Post  key={post.id} postData={post} />
                    ))
                ) : (
                    <p>No posts available.</p>
                )
            }
        </Flex>
);
}

export default ProfilePage;