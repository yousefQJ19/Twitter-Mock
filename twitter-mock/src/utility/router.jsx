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
import ProfilePage from "../Pages/ProfilePostPage"
import ProfileLayout from "../Layouts/profileLayout"
const root=createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route  element={<PrivateRoute><HomePageLayout/></PrivateRoute>} >
            <Route path="/" element={<HomePage/>}/>
            
            <Route  element={<ProfileLayout/>}>
                <Route path="profile" element={<ProfilePage/>}/>
            </Route>
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