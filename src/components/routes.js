import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "./ErrorPage/ErrorPage"
import Home from "./Home/Home"
import Root from "./Root/Root"

const router = createBrowserRouter([
    
    {
        path : '/',
        element : <Root></Root>,
        errorElement : <ErrorPage></ErrorPage>,
        // loader : productsAndCartData ,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/home',
                element : <Home></Home>
            },
            // {
            //     path : '/shop',
            //      element :<Shop></Shop>
            // },
            // {
            //     path : '/about',
            //      element : <About></About>
            // },
            // {
            //     path : '/cart',
            //      element : <Cart></Cart>
            // }

        ]
    },
    
    
  ])

  export default router