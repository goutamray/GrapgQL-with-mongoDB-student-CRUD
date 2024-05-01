import { createBrowserRouter } from "react-router-dom";
import Student from "../components/Student";
import Layout from "../components/layout/Layout";
import Register from "../components/Register";
import Login from "../components/Login";


// create router 
const router = createBrowserRouter([
    {
      element : <Layout />,
      children : [
        {
          path : "/",
          element : <Student /> 
        },
        {
          path : "/register",
          element : <Register />
        },
        {
          path : "/login",
          element : <Login />
        }
      ]
    }
])

export default router; 












