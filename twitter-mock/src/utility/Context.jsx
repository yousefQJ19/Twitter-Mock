/* eslint-disable react/prop-types */
import { createContext,useState } from "react";



const  AuthContext = createContext()



const MyProvider = ({ children }) => {
    const [user, setUser] = useState('Initial Value');

    const updateValue = (newValue) => {
        setUser(newValue);
    };

    return (
        <AuthContext.Provider value={{ user, updateValue }}>
        {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, MyProvider };

