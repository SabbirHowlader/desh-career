import AboutUs from "../../Page/AboutUs/AboutUs";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main/Main");
const { default: Home } = require("../../Page/Homes/Home/Home");

const Router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/aboutus',
                element: <AboutUs></AboutUs>
            },
        ]
        
    }
])
export default Router;