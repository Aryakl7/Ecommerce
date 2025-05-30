import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";
import Cart from "../pages/Cart";
import AdminPanel from "../pages/AdminPanel";
import AllProducts from "../pages/AllProducts";
import AllUsers from "../pages/AllUsers";
import CategoryProduct from "../pages/CategoryProduct";
import ProductDetails from "../pages/ProductDetails";
import SearchProduct from "../pages/SearchProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "",
                element: <Home/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"forgot-password",
                element:<ForgotPassword/>
            },
            {
                path:"sign-up",
                element:<SignUp/>
            },
            {
                path:"cart",
                element:<Cart/>
            },
            {
                path: "product-category",
                element:<CategoryProduct/>
            },
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
            {
                path : "search",
                element : <SearchProduct/>
            },
            {
                path:"admin-panel",
                element:<AdminPanel/>,
                children : [
                    {
                        path : "all-users",
                        element : <AllUsers/>
                    },
                    {
                        path : "all-products",
                        element : <AllProducts/>
                    }
                ]
            }
        ]
    }
])

export default router