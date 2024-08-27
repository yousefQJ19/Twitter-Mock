/* eslint-disable react/prop-types */
import {Formik,Field,Form, ErrorMessage} from "formik"
import {Button,Input,Flex, Box} from "@chakra-ui/react"
import {supabase} from "../../utility/config"
import { useContext, useState } from "react";
import { AuthContext } from "../../utility/Context";

function LoginForm() {
    
        let {updateValue} =useContext(AuthContext)
        const [userPassword,setUserPassword] = useState()
        const validateCredentials = (values) => {
            const errors = {};
            if (!values.Email) {
                errors.Email = 'Email is required';
            } else if (!values.Password) {
                errors.Password = 'Password is required';
            } else if (userPassword && values.Password !== userPassword) {
                errors.Password = 'Password is not correct';
            }
            return errors;
        };

        const handleSubmit = async (values, actions) => {
            const { data, error } = await supabase
                .from('Users')
                .select('password')
                .eq('email', values.Email)
                .single();  // Fetch a single user by email
    
            if (error || !data) {
                actions.setFieldError('Email', 'User not found');
                actions.setSubmitting(false);
                return;
            }
    
            setUserPassword(data.password);
            actions.setSubmitting(false);
    
            // Check the password after it's set
            if (values.Password !== data.password) {
                actions.setFieldError('Password', 'Password is not correct');
            } else {
                console.log('Form submitted successfully:', values);
                updateValue(data)
            }
        };
        
        return (
            <Box bg={"white"} 
                      justifyContent={"space-around"}
                      p={8}
                      w={"350px"}
                      >
                <Flex as={Formik}
                    initialValues={{ 
                        Email: '',
                        Password:''
                    }}

                    validate={validateCredentials}
                    onSubmit={handleSubmit}
                >
                {(props) => (
                            <Form >
                                <Flex flexDir={"column"} gap={8}>
                                    <Input name="Email" as={Field} placeholder="email" />
                                    <ErrorMessage name="Email" />

                                    <Input name="Password" as={Field} type="password"  placeholder="password"/>
                                    <ErrorMessage name="Password" />

                                    <Button
                                        mt={4}
                                        colorScheme='teal'
                                        isLoading={props.isSubmitting}
                                        type='submit'
                                    >
                                        Submit
                                    </Button>
                                </Flex>
                            </Form>
                )}
                </Flex>
            </Box>
        )
    }

export default LoginForm;