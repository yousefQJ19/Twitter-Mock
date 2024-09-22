/* eslint-disable react/prop-types */
import {Formik,Field,Form, ErrorMessage} from "formik"
import {Button,Input,Flex} from "@chakra-ui/react"
import {supabase} from "../../utility/config"
import { useContext, useState } from "react";
import { AuthContext } from "../../utility/Context";

function LoginForm() {
    
        let {updateValue} =useContext(AuthContext)
        const [userPassword] = useState()

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
            const { data, error } = await supabase.auth.signInWithPassword({
            email: values.Email,
            password: values.Password,
            });
        
            if (error) {
            actions.setFieldError('Email', 'User not found or invalid credentials');
            actions.setSubmitting(false);
            return;
            }
        
            // Successful login: Update the context with the user session
            const session = data?.session;
            const user = session?.user;
        
            if (user) {
            console.log('Form submitted successfully:', values);
            updateValue(user); // Update the context with the logged-in user's info
            }
        
            actions.setSubmitting(false); // Stop form submission process
        };

        return (
            <Flex bg={"white"} 
                      p={8}
                      borderRadius={5}>

                <Formik
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
                                    <Input name="Email" color={"black"} as={Field} placeholder="email" />
                                    <ErrorMessage name="Email" />

                                    <Input name="Password" as={Field} color={"black"} type="password"  placeholder="password"/>
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
                </Formik>
            </Flex>
        )
    }

export default LoginForm;