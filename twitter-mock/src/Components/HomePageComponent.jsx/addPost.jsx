/* eslint-disable react/prop-types */
import {Image,Text, Flex, Button, Input} from "@chakra-ui/react"
import {Field, Formik, Form} from "formik"
import { useContext, useState } from "react";

import { supabase } from "../../utility/config";
import { AuthContext } from "../../utility/Context";
import IconList from "./iconList";

function AddPost() {
    const {user} = useContext(AuthContext)
    const[display,setDisplay]= useState(false)

    async function handelPost(values) {
      try {
        const { data, error } = await supabase
          .from("Posts")
          .insert([
            { "user_id": user.id, "body": values.Post }
          ])
    
        if (error) {
          console.error('Error inserting post:', error)
        } else {
          console.log('Post inserted successfully:', data)
        }
      } catch (err) {
        console.error('Error:', err)
      }
    }

    return ( 
        <Flex p={2} 
              borderBottom={"1px solid gray"}
              onClick={() => setDisplay(true)}>
            <Flex flexDirection={"column"} px={2}>

                <Image w={"40px"} 
                      h={"40px"} 
                      src={"/profile-3.png"} 
                      borderRadius={"50px"} 
                      display={"block"}/>
            </Flex>

            <Flex flexDirection={"column"} 
                  w={"100%"} 
                  gap={8} >
                    
                <Formik
                    initialValues={{ 
                        Post:''
                    }}
                    onSubmit={handelPost}
                > 
                {(props) => (
                  <Form >
                    <Input color={"white"}
                          name="Post" 
                          as={Field} 
                          placeholder="Whats new !?"
                          border={"none"} 
                          onClick={(e)=>{e.preventDefault()}}
                          _placeholder={{fontSize:"25px"}}/>

                    <Text display={display?"block":"none"}
                          color={"blue.500"}
                          py={3}>
                            Every one can replay
                    </Text>

                    <Flex justifyContent={"space-between"} 
                          borderTop={display? ".5px solid gray":"0px"} 
                          alignItems={"center"}
                          mt={5}>

                        <IconList/>

                    <Button bg={"blue.500"}
                            w={"100px"}
                            borderRadius={"20px"}
                            isLoading={props.isSubmitting}
                            type='submit'>
                              Post</Button>
                    </Flex>
                  </Form>
                )}
                </Formik>
            </Flex>
        </Flex>
    );
}

export default AddPost;