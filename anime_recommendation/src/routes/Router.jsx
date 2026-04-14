import{createBrowserRouter} from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import HomePage from "../pages/HomePage"
import OtpPage from "../pages/OtpPage"
const Router=createBrowserRouter([
    {
        path:"/login",
        element:<LoginPage/>
    },
    {
        path:"/home",
        element:
        <HomePage/>
    },
    {
        path:"/otp",
        element:<OtpPage/>
    },{
        path:"/",
        element:
        <HomePage/>
    }
])

export default Router