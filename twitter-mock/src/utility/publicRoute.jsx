/* eslint-disable react/prop-types */
import {  useContext } from "react";
import { AuthContext } from "./Context";
import { Navigate } from "react-router-dom";

function PublicRoute({children}) {
    const {user} = useContext(AuthContext)
    return user? <Navigate to="/"/> :children
}

export default PublicRoute