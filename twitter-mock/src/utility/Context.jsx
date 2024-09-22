/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from 'react';
import { supabase } from './config'; // Make sure to initialize your Supabase client

const AuthContext= createContext()

const MyProvider = ({ children }) => {
    const [user, setUser] = useState(true);

    const updateValue = (newValue) => {
        setUser(newValue);
    };

    useEffect(() => {
        const getUserSession = async () => {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) {
            console.error('Error fetching session:', error);
        } else {
            setUser(session?.user); 
        }
        };

        getUserSession();

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
        setUser(session?.user); 
        });

        return () => {
        authListener?.subscription?.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user, updateValue }}>
        {children}
        </AuthContext.Provider>
    );
    };

    export  {AuthContext,MyProvider};