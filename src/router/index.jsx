import { createHashRouter } from "react-router-dom"

//前台
import FrontLayout from "../layout/FrontLayout"
import HomePage from "../pages/front/HomePage"
import ProductPage from "../pages/front/ProductPage"
import ProductDetailPage from "../pages/front/ProductDetailPage"
import AboutUsPage from "../pages/front/AboutUsPage"
import CartPage from "../pages/front/CartPage"
import NotFound from "../pages/front/NotFound"
import CheckoutSuccess from "../pages/front/CheckoutSuccess"
import CheckoutPayment from "../pages/front/CheckoutPayment"
import CheckoutForm from "../pages/front/CheckoutForm"



const router = createHashRouter([
    {
        path:'/',
        element: <FrontLayout />,
        children:[
            {
                index: true,
                element: < HomePage />,
            },
            {
                path: 'product',
                element: < ProductPage />,
            },
            {
                path:'product/:id',
                element: <ProductDetailPage />
            },
            {
                path:'about',
                element: <AboutUsPage />
            },
            {
                path: 'cart',
                element: <CartPage />
            },
            {
                path:'checkout-form',
                element: <CheckoutForm />
            },
            {
                path:'checkout-payment/:orderId',
                element:<CheckoutPayment />
            },
            {
                path: 'checkout-success/:orderId',
                element: <CheckoutSuccess />
            }
        ]
    },
    {
        path:'*',
        element: <NotFound />
    }
])


export default router