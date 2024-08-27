import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
}from "react-router-dom"
import HomePage from "../Pages/HomePage"
import { MyProvider } from "./Context"
import PrivateRoute from "./privateRoute"
import PublicRoute from "./publicRoute"
import HomePageLayout from '../Layouts/dashBoardLayout';
import AuthDashBoard from "../Layouts/authLayout"
import LoginPage from "../Pages/LoginPage"


const root=createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route element={<PrivateRoute><HomePageLayout/></PrivateRoute>} >
            <Route path="/" element={<HomePage/>}/>
            <Route path="profile" element={<h1>profile page</h1>}/>
        </Route>
        
        <Route path="/" element={<PublicRoute> <AuthDashBoard/> </PublicRoute>} >
            <Route path="login" element={<LoginPage/>}/>
            <Route path="register" element={<h1>register page</h1>}/>
        </Route>
    </Route>
    
))


function App() {
    return(
        <MyProvider>
            <RouterProvider router={root}/>
        </MyProvider>
    )
    
}

export default App