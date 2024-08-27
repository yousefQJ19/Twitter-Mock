/* eslint-disable react/prop-types */
import {useContext } from "react";
import { AuthContext } from "./Context";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {
    const {user} = useContext(AuthContext)
    return user? children :<Navigate to="/login"/>
}

export default PrivateRoute