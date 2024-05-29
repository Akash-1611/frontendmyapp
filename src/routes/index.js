import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CheckEmailPage from "../pages/CheckEmailPage";
import Register from "../pages/Register";
import CheckPasswordPage from "../pages/CheckPasswordPage";
import Home from "../pages/Home";
import MessagePage from "../components/MessagePage";
import AuthLayouts from "../layout";
import Forgotpassword from "../pages/Forgotpassword";


const router = createBrowserRouter([
  {
    path: '/',
    element : <App/>,
    children : [
        {
            path : "register",
            element : <AuthLayouts><Register/></AuthLayouts>
        },
        {
            path : 'email',
            element : <AuthLayouts><CheckEmailPage/></AuthLayouts>
        },
        {
            path : "password",
            element : <AuthLayouts><CheckPasswordPage/></AuthLayouts>
        },
        {
          path : "forgot-password",
          element : <AuthLayouts><Forgotpassword/></AuthLayouts>
        },
        {
            path : "",
            element : <Home/>,
            children : [
                {
                    path : ':userId',
                    element : <MessagePage/>
                }
            ]
        }
    ]
  }
])


export default router